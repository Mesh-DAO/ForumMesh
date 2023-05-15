import classNames from "classnames";

type Props = {
  className?: string;
  placeHolder?: string;
  value?: string;
  children: React.ReactNode;
};

export function InputFile({ className, children }: Props) {
  return (
    <label className={classNames(
      "flex items-center justify-center gap-2 text-white bg-brand-blue rounded-md font-Roboto font-black text-xs w-[113px] cursor-pointer opacity-70 hover:opacity-100 transition-all",
      className
    )}>
      {children}
      <input
        type="file"
        className="opacity-0 absolute z-[-1]"
        accept="image/jpg, image/jpeg"
      />
    </label>
  )
}