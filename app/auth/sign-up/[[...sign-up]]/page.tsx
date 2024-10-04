import AuthLayoutWrapper from "@/components/AuthLayoutWrapper";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <AuthLayoutWrapper displayName="Register">
      <SignUp />
    </AuthLayoutWrapper>
  );
}
