import { Outlet, useRouteLoaderData } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';

function EventsRootLayout () {
  const authToken = useRouteLoaderData('root');
  return (
    <>
      {authToken && <EventsNavigation />}
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
