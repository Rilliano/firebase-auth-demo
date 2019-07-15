import React from "react";
import Login from "./Login";
import Signup from "./Signup";

const routes = [
  { name: "Signup", path: "/", exact: true, main: () => <Signup /> },
  { name: "Login", path: "/login", exact: true, main: () => <Login /> }
];

export default routes;
