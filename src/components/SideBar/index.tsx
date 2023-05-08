import {
  Search,
  List,
  Tag,
  Award,
  HelpCircle,
  MessageCircle,
  Heart,
  Github,
  Instagram,
  Facebook,
} from "../Icons";
import { Input } from "../Input";
import { MenuItem } from "../MenuItem";
import { Title } from "../Title";

export function SideBar() {
  return (
    <div className="fixed pt-24 pb-4 flex flex-col justify-between w-[20%] h-screen bg-white">
      <div className="flex flex-col w-full gap-4">
        <div className="flex items-center mb-5 pl-[10%]">
          <Search />
          <Input placeHolder="Search" className="ml-2 flex-grow" />
        </div>

        <div className="flex flex-col gap-6 w-[60%]">
          <div className="flex flex-col ">
            <Title size="sm" color="gray" className="pl-[20%] mb-[10px]">
              MENU
            </Title>
            <MenuItem>
              <List />
              Questions
            </MenuItem>
            <MenuItem>
              <Tag />
              Tags
            </MenuItem>
            <MenuItem>
              <Award />
              Ranking
            </MenuItem>
          </div>

          <div className="flex flex-col ">
            <Title size="sm" color="gray" className="pl-[20%] mb-[10px]">
              PERSONAL NAVIGATOR
            </Title>
            <MenuItem>
              <HelpCircle />
              Questions
            </MenuItem>
            <MenuItem>
              <MessageCircle />
              Answers
            </MenuItem>
            <MenuItem>
              <Heart />
              Likes & Votes
            </MenuItem>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-3 items-center justify-center">
        <Github />
        <Instagram />
        <Facebook />
      </div>
    </div>
  );
}
