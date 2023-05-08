import { Logo } from "../Icons";
import { Title } from "../Title";

export function Loading() {
  return (
    <div className="grid h-screen place-items-center bg-gray-200">
      <div className="w-1/6 animate-pulse grid place-items-center gap-4">
        <Logo />
        <Title bold={500} size="2xl">Loading...</Title>
      </div>
    </div>
  );
}
