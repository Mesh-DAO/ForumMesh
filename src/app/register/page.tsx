import { Header } from "@/components/Header";
import { RegisterForm } from "@/components/Forms/RegisterForm";

export default function Register() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-between h-screen w-full">
        <RegisterForm />
        <div className="h-full w-[65%]">
          <img
            src="/RegisterBanner.png"
            alt="registerbanner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
