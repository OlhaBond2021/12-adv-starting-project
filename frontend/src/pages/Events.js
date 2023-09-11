import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;

  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }

  return <EventsList events={events} />;
};

export default EventsPage;

//!!нижче це все ще код на стороні клієнта (браузера), тобто функція loader() виконується в браузері, а не на сервері
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //1) first variant using error message
    // return { isError: true, message: "Could not fetch events." };
    //2) second variant using error message
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    //3) third variant using error message
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // const resData = await response.json();
    //return resData.events;  // можна повертати будь який тип змінних (і цифри і строки і об'єкти і т.п)
    /////////////////////////////////////
    // const res = new Response('any data', { status: 201 }); //це стандартна функція браузера
    // return res;
    ///////////////////////////////////////
    return response;
  }
}
