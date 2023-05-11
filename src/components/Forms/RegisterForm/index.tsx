"use client";
import Link from "next/link";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Title } from "../../Title";
import { Controller, useForm } from "react-hook-form";
import { createUserFormResolve } from "@/validade";

type CreateUserData = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({
    resolver: createUserFormResolve,
  });

  const handleCreateUser = (values: any) => {
    console.log(values);
  };

  console.log(errors);

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
        <form
          onSubmit={handleSubmit(handleCreateUser)}
          className="flex flex-col gap-4"
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) => <Input placeHolder="Username" {...field} />}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input type="email" placeHolder="Email" {...field} />}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input type="password" placeHolder="Password" {...field} />}
          />
          <Controller
            name="repeatPassword"
            control={control}
            render={({ field }) => <Input type="password" placeHolder="repeatPassword" {...field} />}
          />
          <div className="text-[#FF4A48]">
            {errors.username && <p>{errors.username.message}</p>}
            {errors.email && <p>{errors.email.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}
            {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
          </div>
          <Button
            color="blue"
            textColor="white"
            className="w-full"
            type="submit"
          >
            Register
          </Button>
          <Link href="/login">
            <Button color="red" className="w-full">
              Login
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
