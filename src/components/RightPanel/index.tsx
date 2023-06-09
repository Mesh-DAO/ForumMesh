import { Star, LinkIcon } from "../Icons";
import { LinkPanel } from "../LinkPanel";
import { Title } from "../Title";

export function RightPanel() {
  return (
    <div className="flex flex-col w-[20%] mr-[2%] px-[15px] gap-5 rounded-md h-full mt-32">
      <div className="fixed flex flex-col border-2 border-[#EAEAEA] mr-[2%] p-[15px] gap-5 rounded-md">
        <div className="flex flex-col gap-3">
          <Title>
            <Star />
            Must-read posts
          </Title>
          <hr />
          <LinkPanel>
            Please read rules before you start working on a platform
          </LinkPanel>
          <LinkPanel>Vision & Strategy</LinkPanel>
        </div>
        <div className="flex flex-col gap-3">
          <Title>
            <LinkIcon /> Must-read posts
          </Title>
          <hr />
          <LinkPanel>Source-code on github</LinkPanel>
          <LinkPanel>Golang best-practices</LinkPanel>
          <LinkPanel>Alem School dashboard</LinkPanel>
        </div>
      </div>
    </div>
  );
}
