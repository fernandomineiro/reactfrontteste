import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./services/auth.service";

import Login from "./components/Login";

import Profile from "./components/Profile";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/login"]} component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
};

export default App;