import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

export const AuthenticationGuard = ({
    component: Component,
}: {
    component: React.ComponentType;
}) => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div className="page-layout overalltext">Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Component />;
};
