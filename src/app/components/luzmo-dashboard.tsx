'use client';

import { LuzmoDashboardComponent } from '@luzmo/react-embed';

interface Props {
  authKey: string;
  authToken: string;
  dashboardId: string;
}

export default function LuzmoDashboard({ authKey, authToken, dashboardId }: Props) {
  return (
    <LuzmoDashboardComponent
      appServer={process.env.NEXT_PUBLIC_LUZMO_APP_SERVER}
      apiHost={process.env.NEXT_PUBLIC_LUZMO_API_HOST}
      authKey={authKey}
      authToken={authToken}
      dashboardId={dashboardId}
    ></LuzmoDashboardComponent>
  );
}
