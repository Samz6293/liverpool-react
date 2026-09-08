import { FaGithub } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0c0908]/80 border-b border-white/10 shadow-2xl shadow-black/50">

      <div className="content-box px-4 sm:px-6 py-3.5 flex justify-between items-center">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 select-none">
          <div className="leading-tight">
            <h1 className="font-extrabold font-anybody text-lg sm:text-xl tracking-wider text-white uppercase">
              Liverpool
            </h1>
            <p className="font-rainbow text-xs tracking-widest text-red-500 font-bold uppercase -mt-0.5">
              Favorites
            </p>
          </div>
        </div>

        {/* GitHub / Repo action */}
        <a
          href="https://github.com/Samz6293/liverpool-react"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold
          bg-white/5 border border-white/10 text-gray-200
          hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]
          active:scale-95 transition-all duration-200"
        >
          <FaGithub className="text-2xl" />
          <span className="text-sm">Source</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;