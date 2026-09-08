import { useState } from "react";
import type { PlayerInfo } from "../../types";
import { RiDislikeLine } from "react-icons/ri";

export interface FavPlayer {
  player: PlayerInfo;
}

const FavoritePlayer = ({ player }: FavPlayer) => {
  const [firstName, ...lastName] = player.strPlayer.split(" ");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="flex flex-col bg-[#0e0a0b] max-w-100 min-w-67.5 rounded-2xl border border-white/10 overflow-hidden  shadow-2xl shadow-black/70 hover:border-red-600/50 hover:shadow-red-950/40 transition-all duration-300
     m-6">
      {/* Top cover image filling full card width */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-black/40">
        <img
          src={player.strThumb}
          alt={player.strPlayer}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
        />

        {/* Bottom subtle fade into card body */}
        {/* <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#0e0a0b] to-transparent pointer-events-none" /> */}
      </div>

      {/* Card body content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Name section */}
        <div className="flex justify-between items-center">        
            <div className="mb-3">
                <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">
                #{player.idPlayer} · {player.strNationality}</span>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-anybody text-white leading-none mt-1">
                {firstName}</h3>
                <p className="text-xl sm:text-2xl font-black font-rainbow text-red-600 leading-tight">
                {lastName.join(" ")}</p>
            </div>

            <button className="p-4 text-2xl hover:text-red-600 transition-all duration-200"><RiDislikeLine /></button>
        </div>


        {/* Description & Read more toggle */}
        <div className="mt-auto pt-2">
          <p
            className={`text-xs sm:text-sm text-gray-300 leading-relaxed font-light select-none transition-all duration-300 ${
              isExpanded ? "line-clamp-none" : "line-clamp-3"
            }`}
          >
            {player.strDescriptionEN ||
              "No detailed description available for this player."}
          </p>

          {player.strDescriptionEN && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-xs font-mono font-bold tracking-wider text-red-500 hover:text-red-400 focus:outline-none transition-colors uppercase inline-flex items-center gap-1 cursor-pointer"
            >
              {isExpanded ? "Read less ↑" : "Read more ↓"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default FavoritePlayer;