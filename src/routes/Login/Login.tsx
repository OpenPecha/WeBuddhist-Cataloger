import { Button } from "@/components/ui/atoms/button"
import { AppleLogo, GoogleLogo } from "@/components/ui/molecules/all-icons/Icons";
import AuthCard from "@/components/ui/molecules/auth-card/AuthCard"
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "sonner";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    const handleGoogleLogin = async () => {
        try {
            const redirectPath = "/";
            await loginWithRedirect({
                authorizationParams: {
                    connection: "google-oauth2",
                    prompt: "select_account",
                },
                appState: { returnTo: redirectPath },
            });
        } catch (error: any) {
            toast.error(error?.message || "Login failed");
        }
    };

    const handleAppleLogin = async () => {
        try {
            const redirectPath = "/";
            await loginWithRedirect({
                authorizationParams: { connection: "apple" },
                appState: { returnTo: redirectPath },
            });
        } catch (error: any) {
            toast.error(error?.message || "Login failed");
        }
    };
    return (
        <div className=' flex flex-col items-center justify-center h-screen'>
            <AuthCard
                title={"Welcome to WeBuddhist Cataloger"}
                description={"Login to your account"}
                footer={
                    <div className="w-full text-center text-sm text-muted-foreground">
                        A product Under WeBuddhist Study Platform
                    </div>
                }
            >
                <form className="space-y-6" noValidate>
                    <div className="grid gap-3">
                        <div className="grid grid-cols-2 gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full gap-2"
                                onClick={handleGoogleLogin}
                            >
                                <GoogleLogo
                                    size={20}
                                />
                                Google
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full gap-2"
                                onClick={handleAppleLogin}
                            >
                                <AppleLogo
                                    size={20}
                                />
                                Apple
                            </Button>
                        </div>
                    </div>
                </form>
            </AuthCard>
        </div>
    )
}

export default Login