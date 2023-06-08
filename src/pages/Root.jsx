import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";

export default function Root() {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
    </Fragment>
  );
}
