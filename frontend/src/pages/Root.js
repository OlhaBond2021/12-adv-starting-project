import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  const navigation = useNavigation();


  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === 'loading' && <p>loading...</p>}
        <Outlet /> {/* це визначає що в цьому місця будуть відображатись всі дочірні маршрути*/}
      </main>
    </>
  )
};

export default RootLayout;
