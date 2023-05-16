"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Title } from "@/components/Title";
import { useAuthContext } from "@/contexts";
import { LoginResolve } from "@/validation/Login";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

type ILoginForm = {
  username: string;
  password: string;
};

export function LoginForm() {
  const { login } = useAuthContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: LoginResolve,
  });

  async function onSubmit(values: ILoginForm) {
    await login(values.username, values.password);
  }

  return (
    <div className="flex items-center justify-center w-[35%]">
      <div className="flex flex-col w-[70%] gap-4">
        <Title className="mb-2" size="2xl" bold={900}>
          We have Missed You!
        </Title>
        <Title size="lg">
          More than 150 questions are waiting for your wise!
        </Title>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Controller
            name="username"
            control={control}
            render={({ field }) => <Input placeHolder="Username" {...field} />}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input type="password" placeHolder="Password" {...field} />
            )}
          />
          <div className="text-[#FF4A48]">
            {errors.username && <p>{errors.username.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <Button color="blue" className="w-full" type="submit">
            Login
          </Button>
        </form>
        <Link href={"/register"}>
          <Button color="white" className="w-full" type="submit">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}
