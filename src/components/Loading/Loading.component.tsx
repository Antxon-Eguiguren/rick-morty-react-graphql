import Sentry from 'react-activity/dist/Sentry';
import 'react-activity/dist/Sentry.css';

export const Loading = () => {
  return (
    <>
      <Sentry color="red" size={60} speed={0.5} animating={true} />
      <p className="loading-message">Loading data from the server...</p>
    </>
  );
};
