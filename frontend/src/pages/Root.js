import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet /> {/* це визначає що в цьому місця будуть відображатись всі дочірні маршрути*/}
      </main>
    </>
  )
};

export default RootLayout;
