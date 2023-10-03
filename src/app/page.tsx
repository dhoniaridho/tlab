import { DefaultLayout } from "../layouts";
import { GameList } from "./components/game-list";
import { AppHero } from "./components/hero";

export function HomePage() {
  return (
    <DefaultLayout>
      <main className="bg-[#edf1f3]">
        <AppHero />
        <GameList />
      </main>
    </DefaultLayout>
  );
}
