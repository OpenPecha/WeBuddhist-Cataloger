import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { syncAuth0TokenToSessionStorage } from "@/lib/auth-utils";

export const AuthenticationGuard = ({
  component: Component,
}: {
  component: React.ComponentType;
}) => {
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      syncAuth0TokenToSessionStorage();
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Component />;
};
