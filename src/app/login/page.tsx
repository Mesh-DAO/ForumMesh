"use client";
import { LoginForm } from "@/components/Forms";
import { LayoutPage } from "@/components/Shared";
import Image from "next/image";

export default function Login() {
  return (
    <LayoutPage sidebar={false}>
      <div className="flex items-center justify-between bg-white">
        <LoginForm />
        <div className="w-[60%] h-screen">
          <Image
            src="/LoginBanner.png"
            alt="loginbanner"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            unoptimized={true}
            loading="lazy"
          />
        </div>
      </div>
    </LayoutPage>
  );
}
