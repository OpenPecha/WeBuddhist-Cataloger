import { type ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card";
import { cn } from "@/lib/utils";
import logo from "@/assets/icon/pecha_icon.png";
type AuthCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
};

const AuthCard = ({
  title,
  description,
  children,
  footer,
  className,
}: AuthCardProps) => {
  return (
    <div className="w-full max-w-md shadow-none rounded-[20px] bg-[#FAFAFA] border border-edge p-1.5">
      <Card className={cn("w-full max-w-md shadow-none bg-white ", className)}>
        <CardHeader className="flex flex-col items-center justify-center">
          <img src={logo} alt="logo" className=" w-14 h-14" />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">{children}</CardContent>
        {footer && (
          <CardFooter className="flex-col border-t">{footer}</CardFooter>
        )}
      </Card>
    </div>
  );
};

export default AuthCard;
