import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/main-navigation/MainNavigation";

export default function Root() {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
    </Fragment>
  );
}
