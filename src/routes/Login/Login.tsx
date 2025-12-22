import { useState } from "react";
import { Button } from "@/components/ui/atoms/button";
import { AppleLogo, GoogleLogo } from "@/components/ui/molecules/all-icons/Icons";
import AuthCard from "@/components/ui/molecules/auth-card/AuthCard";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "sonner";

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSocialLogin = async (
        connection: "google-oauth2" | "apple",
        authorizationParams?: Record<string, string>
    ) => {
        if (isSubmitting) return;

        try {
            setIsSubmitting(true);
            await loginWithRedirect({
                authorizationParams: {
                    connection,
                    ...authorizationParams,
                },
                appState: { returnTo: "/" },
            });
        } catch (error: any) {
            toast.error(error?.message || "Login failed");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <AuthCard
                title="Welcome to WeBuddhist Cataloger"
                description="Login to your account"
                footer={
                    <div className="w-full text-center text-sm text-muted-foreground">
                        A product Under WeBuddhist Study Platform
                    </div>
                }
            >
                <div className="grid gap-3">
                    <div className="grid grid-cols-2 gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            className="w-full gap-2"
                            disabled={isSubmitting}
                            onClick={() =>
                                handleSocialLogin("google-oauth2", { prompt: "select_account" })
                            }
                        >
                            <GoogleLogo size={20} />
                            Google
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            className="w-full gap-2"
                            disabled={isSubmitting}
                            onClick={() => handleSocialLogin("apple")}
                        >
                            <AppleLogo size={20} />
                            Apple
                        </Button>
                    </div>
                </div>
            </AuthCard>
        </div>
    );
};

export default Login;
