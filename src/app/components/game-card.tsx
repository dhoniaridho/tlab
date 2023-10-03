import { PropsWithChildren } from "react";

type GameCardPropsType = {
  image: string;
  title: string;
  description: string;
  platform: string;
  releaseDate: string;
  genre: string;
} & PropsWithChildren;

export function GameCard(props: GameCardPropsType) {
  return (
    <div title={props.title} className="p-2 bg-white w-fit rounded">
      <div className="h-60 relative overflow-hidden rounded">
        <img
          className="object-cover rounded w-full h-full"
          src={props.image}
          alt={`${props.title} image`}
        />
        <div className="absolute font-semibold bottom-3 left-3 bg-[#C1E1FF] text-[#0E385F] inline-block px-2 py-1 rounded-full">{props.genre}</div>
      </div>
      <div className="space-y-3 py-4">
        <div className="text-xl">{props.title}</div>
        <div>{props.description}</div>
        <div className="flex border-t p-2">
          <div className="w-1/2">
            <p className="pb-2 text-[#A0A7B9]">Platform</p>
            <p>{props.platform}</p>
          </div>
          <div className="w-1/2">
            <p className="pb-2 text-[#A0A7B9]">Release Date</p>
            <p>{ props.releaseDate }</p>
          </div>
        </div>
      </div>
    </div>
  );
}
