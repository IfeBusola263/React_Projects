import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function RootNav() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
