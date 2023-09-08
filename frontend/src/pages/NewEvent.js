import { Link } from "react-router-dom";

const NewEventPage = () => {
  return (
    <>
      <h1>New Event</h1>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default NewEventPage;
