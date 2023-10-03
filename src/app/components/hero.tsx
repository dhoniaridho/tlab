import Hero from "@/assets/images/hero.png";
import { UiButton } from "../../components";

export function AppHero() {
  return (
    <div className="relative h-[540px] md:h-[540px] w-full">
      <div className="absolute w-full h-full z-10 flex justify-center items-center gap-5">
        <div className="space-y-5 text-white text-center">
          <h1 className="text-3xl font-semibold">Pilih Game Favorite Kalian</h1>
          <p>
            Shortbread cookie tootsie roll sugar plum cheesecake pudding
            croissant apple pie. Lollipop macaroon lollipop croissant chocolate
            cake croissant fruitcake brownie jelly-o.
          </p>
          <UiButton intent="primary">Sign Up For Free Account</UiButton>
        </div>
      </div>
      <div className="h-full w-full z-0 relative">
        <img className="w-full h-full object-cover" src={Hero} alt="hero" />
        <div className="bg-gradient-to-l from-[#55AEA9]/50 to-[#1B568C]/50 absolute inset-0 z-10"></div>
      </div>
    </div>
  );
}
