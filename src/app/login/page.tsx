"use client"
import { Header } from "@/components/Header";
import { LoginForm } from "@/components/Forms/LoginForm";

export default function Login() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-between h-screen w-full">
        <LoginForm />
        <div className="h-full w-[65%]">
          <img
            src="/LoginBanner.png"
            alt="loginbanner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}