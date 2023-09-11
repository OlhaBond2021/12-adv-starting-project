import { Link, useRouteLoaderData } from "react-router-dom";
import EventForm from '../components/EventForm';

const EditEventPage = () => {
  const data = useRouteLoaderData('event-detail');

  return (
    <>
      <h1>Edit Event</h1>
      <EventForm event={data.event} />
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default EditEventPage;
