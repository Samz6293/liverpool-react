import { FaGraduationCap, FaLayerGroup, FaBolt, FaCodeBranch } from "react-icons/fa";

const About = () => {
  return (
    <section className="content-box max-w-5xl my-16 select-none">
      {/* Title & Badge */}
      <div className="text-center mb-10">
        <span className="px-3.5 py-1 bg-red-600/20 border border-red-500/30 text-red-400 font-mono text-xs rounded-full font-bold tracking-widest uppercase">
          Dev Log · Milestone 01
        </span>
        <h2 className="font-anybody text-4xl sm:text-5xl text-white font-extrabold tracking-wide mt-3">
          ABOUT THIS PROJECT
        </h2>
        <p className="font-mono text-xs sm:text-sm text-gray-400 mt-2 max-w-2xl mx-auto">
          First steps into the React & TypeScript ecosystem — putting bootcamp fundamentals into practice.
        </p>
      </div>

      {/* Main Philosophy Card */}
      <div className="bg-[#0e0a0b] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 mb-8">
        <h3 className="text-xl font-bold font-anybody text-white flex items-center gap-2 mb-3">
          <FaGraduationCap className="text-red-500 text-2xl" />
          The Purpose & Learning Journey
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
          This dashboard is my very first hands-on practice project with React. Having worked through the initial modules covering components, JSX, state, and asynchronous data fetching, my focus was to move beyond static exercises and build an actual interactive application from scratch. While I am still discovering industry best practices, every feature here represents me actively testing, breaking, and applying what I know so far.
        </p>
      </div>

      {/* Grid: Module Implementations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Module 27 Concepts */}
        <div className="bg-[#0e0a0b] border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-red-600/40 transition-all duration-300">
          <div>
            <div className="flex items-center gap-2.5 text-red-500 font-mono text-xs font-bold mb-3 uppercase tracking-wider">
              <FaLayerGroup className="text-lg" />
              <span>React Core & JSX</span>
            </div>
            <ul className="text-xs sm:text-sm text-gray-300 space-y-3 ">
              <li>
                <strong className="text-white font-semibold">Component Hierarchy:</strong> Broken down into isolated presentation and container components (<code className="text-red-400 font-mono">Player</code>, <code className="text-red-400 font-mono">FavoritePlayers</code>, etc.).
              </li>
              <li>
                <strong className="text-white font-semibold">Strict Props with TypeScript:</strong> Defined explicit interfaces for all component props and API entity payloads.
              </li>
              <li>
                <strong className="text-white font-semibold">Conditional Rendering & Lists:</strong> Utilized ternaries and short-circuit logic for dynamic buttons, text truncation, and roster filtering.
              </li>
            </ul>
          </div>
        </div>

        {/* Module 28 Concepts */}
        <div className="bg-[#0e0a0b] border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-red-600/40 transition-all duration-300">
          <div>
            <div className="flex items-center gap-2.5 text-red-500 font-mono text-xs font-bold mb-3 uppercase tracking-wider">
              <FaBolt className="text-lg" />
              <span>State, Events & APIs</span>
            </div>
            <ul className="text-xs sm:text-sm text-gray-300 space-y-3">
              <li>
                <strong className="text-white font-semibold">Lifting State Up:</strong> Centralized the favourites array at the root to maintain a predictable single source of truth across components.
              </li>
              <li>
                <strong className="text-white font-semibold">React 19 <code className="text-red-400 font-mono">use()</code> & Suspense:</strong> Replaced manual loading state boilerplate by declaratively streaming API data via Suspense boundaries.
              </li>
              <li>
                <strong className="text-white font-semibold">Bidirectional Feedback:</strong> Wired callbacks allowing players to be toggled from either the main roster or the shortlist with instant toast alerts.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Tech Stack Pills */}
      <div className="bg-black/30 border border-white/5 rounded-xl p-4 sm:p-5 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase">
          <FaCodeBranch className="text-red-500" />
          <span>Core Stack & Libraries:</span>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] font-mono font-bold">
          <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">Vite</span>
          <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">React 19</span>
          <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">TypeScript</span>
          <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">Tailwind CSS v4</span>
          <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">React Toastify</span>
          <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">TheSportsDB API</span>
        </div>
      </div>
    </section>
  );
};

export default About;