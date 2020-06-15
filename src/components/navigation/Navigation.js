import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, ProfileScreen, NotFoundScreen, RegisterScreen, MessagesScreen } from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";

export const Navigation = () => (
  
  <BrowserRouter>
    <Switch>

      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={HomeScreen}
      />
        <ConnectedRoute
          exact
          path="/newsfeed"
          component={MessagesScreen}
        />
      <ConnectedRoute
        exact
        isProtected
        path="/profiles/:username"
        component={ProfileScreen}
      />
       <ConnectedRoute
        exact
        path="/register"
        component={RegisterScreen}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />

    </Switch>
  </BrowserRouter>
);
