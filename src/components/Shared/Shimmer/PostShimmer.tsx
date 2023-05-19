type Props = {
  isBig?: boolean;
};

export function PostShimmer({ isBig = false }: Props) {
  return (
    <div className="flex items-center justify-between py-1 w-full h-48">
      <div className="flex items-center space-x-3 w-full">
        <div className={`h-14 w-14 shimmer rounded-full`} />
        <div className="space-y-3 w-full">
          <div className="shimmer h-3 w-1/4 rounded-lg" />
          <div className="shimmer h-3 w-3/4 rounded-lg" />
          {isBig && <div className="shimmer h-3 w-48 rounded-lg" />}
        </div>
      </div>
    </div>
  );
}
