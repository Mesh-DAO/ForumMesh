import { IUser } from "@/interfaces";
import { UserService } from "@/services";
import { useEffect, useState } from "react";

export function useGetProfile(id: string) {
  const [profile, setProfile] = useState<IUser>();
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    UserService.findOne(id)
      .then(({ data }) => {
        setProfile(data);
        setIsComplete(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return { profile, isComplete };
}
