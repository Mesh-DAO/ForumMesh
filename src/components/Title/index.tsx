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
  size,
  color = "black",
  className,
  bold = 500,
}: Props) {
  return (
    <h1
      className={classNames(
        `${className} text-${color} font-Roboto flex items-center gap-2`,
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
          "font-bold": bold === 700,
        },
        {
          "font-black": bold === 900,
        }
      )}
    >
      {children}
    </h1>
  );
}
