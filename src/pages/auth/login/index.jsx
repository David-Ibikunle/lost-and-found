import { AuthForm } from "../components/AuthForm";

export const Login = () => {
  return (
    <div className="md:flex lg:flex h-full items-center justify-center">
      <AuthForm type={"login"} />{" "}
    </div>
  );
};
