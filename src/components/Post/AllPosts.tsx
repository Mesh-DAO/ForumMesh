import { IPost } from "@/interfaces/Posts/IPost";
import { Post } from ".";

export function AllPosts() {
  const data: IPost[] = [
    {
      id: 1,
      name: "Nosferas",
      img: "/fotoPessoa.png",
      title: "Eu amo o Silvio Santos mais que tudo",
      content:
        "O silvio santos é tao legal, eu gosto tanto dele, silvio santos se um dia vc ler isso eu gostaria que voce jogasse um aviaozinho pra mim, voce é o meu idolo e eu sou o teu fã",
      time: "5 minutos atras",
    },
    {
      id: 2,
      name: "Nosferas",
      img: "/fotoPessoa.png",
      title: "Eu amo o Silvio Santos mais que tudo",
      content:
        "O silvio santos é tao legal, eu gosto tanto dele, silvio santos se um dia vc ler isso eu gostaria que voce jogasse um aviaozinho pra mim, voce é o meu idolo e eu sou o teu fã",
      time: "5 minutos atras",
    },
    {
      id: 3,
      name: "Nosferas",
      img: "/fotoPessoa.png",
      title: "Eu amo o Silvio Santos mais que tudo",
      content:
        "O silvio santos é tao legal, eu gosto tanto dele, silvio santos se um dia vc ler isso eu gostaria que voce jogasse um aviaozinho pra mim, voce é o meu idolo e eu sou o teu fã",
      time: "5 minutos atras",
    },
  ];

  return (
    <div className="flex flex-col gap-8 h-full mt-[20%]">
      {data.map((item: IPost) => {
        return <Post item={item} />;
      })}
    </div>
  );
}
