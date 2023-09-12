import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  //to='..' це відносний шлях, який повертає назад на один крок якщо вказати relative='path',
  //або в корінь сторінки якщо вказати relative='path' (або не вказувати, стоїть за замовчуванням)
  const data = useRouteLoaderData('event-detail');

  return <EventItem event={data.event} />; // data.event - це прописано в бекенд API
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
};

export const action = async ({ request, params }) => {
  const eventId = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      { status: 500 }
    );
  }

  return redirect('/events');
};
