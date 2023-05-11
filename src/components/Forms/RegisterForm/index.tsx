"use client";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { RegisterResolve } from "@/validation";
import { useAuthContext } from "@/contexts";
import { ISignUpPayload } from "@/interfaces";
import { Button } from "@/components/Button";
import { Title } from "@/components/Title";
import { Input } from "@/components/Input";
import { toast } from "react-hot-toast";

export function RegisterForm() {
  const { signUp } = useAuthContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignUpPayload>({
    resolver: RegisterResolve,
  });

  async function onSubmit(values: ISignUpPayload) {
    try {
      await signUp(values);
      toast.success("Created Account!");
      reset({ username: "", email: "", password: "" });
    } catch (error) {
      toast.error("Error to create account!");
      console.error(error);
    }
  }

  return (
    <div className="flex items-center justify-center w-[35%]">
      <div className="flex flex-col w-[70%] gap-4">
        <Title className="mb-2" size="2xl" bold={900}>
          Join Mesh Community
        </Title>
        <Title size="lg">
          Get more features and priviliges by joining to the most helpful
          community
        </Title>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Controller
            name="username"
            control={control}
            render={({ field }) => <Input placeHolder="Username" {...field} />}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input type="email" placeHolder="Email" {...field} />
            )}
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
            {errors.email && <p>{errors.email.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <Button color="blue" className="w-full" type="submit">
            Register
          </Button>
        </form>
        <Link href="/login">
          <Button color="white" className="w-full">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
