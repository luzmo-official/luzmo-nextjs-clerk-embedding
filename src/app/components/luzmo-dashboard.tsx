'use client';

import { LuzmoDashboardComponent } from '@luzmo/react-embed';

interface Props {
  authKey: string;
  authToken: string;
  dashboards: Dashboard[];
}
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

export default function LuzmoDashboard({ authKey, authToken, dashboards }: Props) {
  // Check if the dashboards array is not empty
  if (dashboards.length === 0) {
    return null; 
  }

  // Get the first dashboard
  const firstDashboard = dashboards[0];
  const { id } = firstDashboard;

  return (
    <LuzmoDashboardComponent
      appServer={process.env.NEXT_PUBLIC_LUZMO_APP_SERVER}
      apiHost={process.env.NEXT_PUBLIC_LUZMO_API_HOST}
      authKey={authKey}
      authToken={authToken}
      dashboardId={id}
    ></LuzmoDashboardComponent>
  );
}