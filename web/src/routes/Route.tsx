import React from 'react';
import {
  Route as RouteDOM,
  RouteProps as RouteDOMProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks';

interface RouteProps extends RouteDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { account } = useAuth();

  return (
    <RouteDOM
      {...rest}
      render={({ location }) => {
        return isPrivate === !!account ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
