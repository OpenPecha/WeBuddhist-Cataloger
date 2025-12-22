import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../config/axios-config";

type Auth0PropsResponse = {
    domain: string;
    client_id: string;
};

export const Auth0ProviderWithNavigate = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const navigate = useNavigate();
    const redirectUri = window.location.origin;

    const {
        data: auth0Config,
        isLoading,
        isError,
        error,
    } = useQuery<Auth0PropsResponse>({
        queryKey: ["auth0Provider"],
        queryFn: async () => {
            const { data } = await axiosInstance.get<Auth0PropsResponse>("/api/v1/props");

            if (!data?.domain || !data?.client_id) {
                throw new Error("Missing Auth0 configuration (domain/client_id).");
            }

            return data;
        },
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: Infinity,
        gcTime: Infinity,
    });

    const onRedirectCallback = () => {
        // You said redirect will always be "/"
        navigate("/", { replace: true });
    };

    if (isLoading) {
        return <div className="page-layout overalltext">Loading...</div>;
    }

    if (isError) {
        return (
            <div className="page-layout overalltext">
                <p>Failed to load authentication configuration.</p>
                <p style={{ opacity: 0.8, marginTop: 8 }}>
                    {error instanceof Error ? error.message : "Unknown error"}
                </p>
            </div>
        );
    }

    return (
        <Auth0Provider
            domain={auth0Config!.domain}
            clientId={auth0Config!.client_id}
            authorizationParams={{
                redirect_uri: redirectUri,
            }}
            onRedirectCallback={onRedirectCallback}
            useRefreshTokens
            cacheLocation="localstorage"
        >
            {children}
        </Auth0Provider>
    );
};
