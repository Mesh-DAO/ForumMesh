import { Card } from "../../Card";
import { PostShimmer } from "./PostShimmer";

export function PostsShimmer() {
  return (
    <div className="space-y-3 w-full">
      <Card className="p-5 w-full">
        <PostShimmer />
      </Card>
      <Card className="p-5 w-full">
        <PostShimmer />
      </Card>
      <Card className="p-5 w-full">
        <PostShimmer />
      </Card>
    </div>
  );
}
