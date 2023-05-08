import Image from "next/image";

export function Logo() {
  return (
    <Image
      className="w-full h-full object-cover"
      draggable={false}
      height={100}
      width={100}
      quality={100}
      src={"/logo.png"}
      alt={"logo"}
    />
  );
}
