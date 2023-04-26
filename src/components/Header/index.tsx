import Link from "next/link";
import { Button } from "../Button";
import { Logo, Userplus } from "../Icons";
import { Title } from "../Title";

export function Header() {
  return (
    <div className="bg-white absolute top-0 w-full h-20 drop-shadow-sm shadow-md rounded-b-md flex items-center justify-between px-10">
      <div className="flex items-center gap-2">
        <Logo />
        <Title>
          Mesh <strong>Forum</strong>
        </Title>
      </div>

      <div className="flex items-center">
        <Link href="/register">
          <Button color="orange">
            <Userplus />
            Register
          </Button>
        </Link>
        <Link href="/login">
          <Button color="white" width="w-[72px]" className="ml-4">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
