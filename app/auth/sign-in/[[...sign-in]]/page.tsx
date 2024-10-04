import AuthLayoutWrapper from "@/components/AuthLayoutWrapper";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <AuthLayoutWrapper displayName="Login">
      <SignIn />
    </AuthLayoutWrapper>
  );
}
