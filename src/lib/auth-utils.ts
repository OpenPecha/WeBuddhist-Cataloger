export const syncAuth0TokenToSessionStorage = () => {
  try {
    const auth0UserKey = Object.keys(localStorage).find((key) =>
      key.includes("@@auth0spajs@@") && key.includes("@@user@@")
    );

    if (!auth0UserKey) {
      console.warn("Auth0 user data not found in localStorage");
      return;
    }

    const auth0UserData = localStorage.getItem(auth0UserKey);
    
    if (!auth0UserData) {
      console.warn("Auth0 user data is empty");
      return;
    }

    const userData = JSON.parse(auth0UserData);
    
    const idToken = userData?.id_token;
    
    if (!idToken) {
      console.warn("id_token not found in Auth0 user data");
      return;
    }
    sessionStorage.setItem("accessToken", idToken);
    
    console.log("Auth0 id_token successfully synced to sessionStorage as accessToken");
  } catch (error) {
    console.error("Error syncing Auth0 token to sessionStorage:", error);
  }
};

export const getAccessToken = (): string | null => {
  return sessionStorage.getItem("accessToken");
};

export const clearAccessToken = () => {
  sessionStorage.removeItem("accessToken");
};

