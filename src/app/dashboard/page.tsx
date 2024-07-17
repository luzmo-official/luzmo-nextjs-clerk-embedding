import Luzmo from '@luzmo/nodejs-sdk';
import { currentUser } from '@clerk/nextjs/server';
import LuzmoDashboard from '../components/luzmo-dashboard';

const client = new Luzmo({
  api_key: process.env.LUZMO_API_KEY!,
  api_token: process.env.LUZMO_API_TOKEN!,
  host: process.env.NEXT_PUBLIC_LUZMO_API_HOST!,
}) as any;

interface Dashboard {
  id: string;
  type: 'dashboard';
  rights: {
    Own: boolean;
    Use: boolean;
    Read: boolean;
    Modify: boolean;
  };
}

export default async function Dashboard() {
  const user = await currentUser();

  const response = await client.create('authorization', {
    type: 'embed',
    username: user!.id,
    name: `${user!.firstName} ${user!.lastName}`,
    email: user!.emailAddresses[0].emailAddress,
    access: {
      collections: [
        {
          id:
            user!.publicMetadata.role === 'manager'
              ? process.env.MANAGER_LUZMO_COLLECTION_ID
              : process.env.SUPPORT_LUZMO_COLLECTION_ID,
          inheritRights: 'use',
        },
      ],
    },
  });

  const {
    id,
    token,
    access: { dashboards },
  } = await response;

  return <LuzmoDashboard authKey={id} authToken={token} dashboardId={dashboards[0].id} />;

  // return (
  //   <>
  //     {dashboards.map((dashboard: Dashboard) => {
  //       const { id } = dashboard;
  //       return <LuzmoDashboard key={id} authKey={id} authToken={token} dashboardId={id} />;
  //     })}
  //   </>
  // );
}
