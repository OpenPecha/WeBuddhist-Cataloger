import axios from "axios";

export function getReadableAxiosError(err: unknown) {
    if (!axios.isAxiosError(err)) {
        return { title: "Unexpected error", detail: "Something went wrong." };
    }

    const status = err.response?.status;

    // No response means network/CORS/server down
    if (!err.response) {
        return {
            title: "Network error",
            detail:
                err.code === "ERR_NETWORK"
                    ? "Cannot reach the server (server down, CORS issue, or offline)."
                    : err.message,
        };
    }

    // Endpoint not found / not implemented
    if (status === 404) {
        return {
            title: "API endpoint not found (404)",
            detail: `The backend route does not exist yet`,
        };
    }

    // Common auth cases
    if (status === 401) {
        return { title: "Unauthorized (401)", detail: "Please log in again." };
    }
    if (status === 403) {
        return { title: "Forbidden (403)", detail: "You don’t have access." };
    }

    // Backend may send useful message bodies:
    const backendMessage =
        (err.response.data)?.message ||
        (err.response.data)?.error ||
        (err.response.data)?.detail;

    return {
        title: `Request failed (${status})`,
        detail: backendMessage ?? err.message,
    };
}