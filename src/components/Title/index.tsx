import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  size?: string;
  color?: string;
  className?: string;
  bold?: number;
};

export function Title({
  children,
  size = "md",
  color = "black",
  className,
  bold = 500,
}: Props) {
  return (
    <h1
      className={classNames(
        `${className} font-Roboto flex items-center gap-2`,
        {
          "text-md": size === "md",
        },
        {
          "text-lg": size === "lg",
        },
        {
          "text-2xl": size === "2xl",
        },
        {
          "text-sm": size === "sm"
        },
        {
          "font-bold": bold === 700,
        },
        {
          "font-black": bold === 900,
        },
        {
          "text-black": color === "black",
        },
        {
          "text-gray-500": color === "gray"
        },
        {
          "text-[#1682FD]": color === "blue"
        }
      )}
    >
      {children}
    </h1>
  );
}
