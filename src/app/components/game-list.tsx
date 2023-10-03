import { games } from "../../fixtures/games";
import { GameCard } from "./game-card";

export function GameList() {
  return (
    <section className="py-10 px-2">
      <div className="flex justify-between items-center h-20 max-w-screen-lg mx-auto">
        <h4 className="text-xl">Game Terbaru</h4>
        <select className="bg-white px-5 py-3 border rounded-lg">
          <option value="">Semua Genre</option>
        </select>
      </div>
      <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-screen-lg mx-auto">
        {games.map((item) => (
          <GameCard
            key={item.id}
            genre={item.genre}
            title={item.title}
            description={item.description}
            image={item.image}
            platform={item.platform}
            releaseDate={item.releaseDate}
          />
        ))}
      </div>
    </section>
  );
}
