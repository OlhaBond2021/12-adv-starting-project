import { Link, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <h1>Edit Event</h1>
      <EventForm event={data.event} method="patch" />
      <p>
        <Link to=".." relative="PATCH">
          Back
        </Link>
      </p>
    </>
  );
};

export default EditEventPage;
