import { ElementType, FC, MouseEvent, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  forceRounded?: boolean;
  dataTestId?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const Card: FC<CardProps> = ({
  children,
  as: Tag = "div",
  className = "",
  forceRounded = false,
  dataTestId = "",
  onClick,
}) => {
  return (
    <Tag
      className={`
        ${
          forceRounded ? "rounded-xl" : "rounded-none sm:rounded-xl"
        } bg-gray-200 ${className}`}
      data-testid={dataTestId}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};
