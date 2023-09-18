import { Link } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return (
    <>
      <h1>New Event</h1>
      <EventForm method="POST" />
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default NewEventPage;
