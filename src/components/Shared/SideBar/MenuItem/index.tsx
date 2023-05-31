import { Title } from "../../../Title";

type Props = {
  children: React.ReactNode;
  active: boolean;
};

export function MenuItem({ children, active }: Props) {
  return (
    <Title
      className={`hover:bg-gradient-to-r from-[#FCF4EC] to-white hover:text-[#FF4555] hover:border-l-4 hover:border-[#FF4555] pl-[20%] h-[50px] transition-all duration-300 ease-in-out ${
        active &&
        "bg-gradient-to-r from-[#FCF4EC] to-white text-[#FF4555] border-l-4 border-[#FF4555]"
      }`}
    >
      {children}
    </Title>
  );
}
