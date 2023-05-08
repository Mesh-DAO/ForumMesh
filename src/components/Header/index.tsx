import Link from "next/link";
import { Button } from "../Button";
import { Logo, Userplus } from "../Icons";
import { Title } from "../Title";

export function Header() {
  return (
    <div className="fixed top-0 bg-white w-full h-20 drop-shadow-sm shadow-md rounded-b-md flex items-center justify-between px-10 z-10">
      <Link
        href="https://mesh-site-bf2x.vercel.app/#inte"
        target="_blank"
        className="flex items-center gap-[15px]"
      >
        <div className="w-10">
          <Logo />
        </div>
        <Title>W3 Forum</Title>
      </Link>

      <div className="flex items-center">
        <Link href="/register">
          <Button color="blue" textColor="white" className="gap-2">
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
