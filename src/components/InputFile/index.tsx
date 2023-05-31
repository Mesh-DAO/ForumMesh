import classNames from "classnames";
import { ChangeEvent, ChangeEventHandler } from "react";

type Props = {
  className?: string;
  placeHolder?: string;
  value?: string;
  children: React.ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
};

export function InputFile({
  className,
  children,
  onChange,
  defaultValue,
  ...props
}: Props) {
  return (
    <label
      className={classNames(
        "flex items-center justify-center gap-2 text-white bg-brand-blue rounded-md font-Roboto font-black text-xs w-40 cursor-pointer transition-all",
        className
      )}
    >
      {children}
      <input
        {...props}
        defaultValue={defaultValue}
        onChange={onChange}
        type="file"
        className="opacity-0 absolute z-[-1]"
        accept="image/jpg, image/jpeg"
      />
    </label>
  );
}
