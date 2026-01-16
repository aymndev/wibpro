import "./page.css";
// use plain <img> for the local logo to avoid optimization/path issues

export default function Home() {
  return (
    <div id="c-page">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-[30px] italic">Welcome to our page !</p>
        <h1 id="header_title">IT'S NICE TO MEET YOU </h1>
        <button
          id="my_button"
          className="text-[25px] hover:scale-90 transition-transform duration-300 transform font-bold bg-blue-500 text-black px-6 py-3 rounded-lg"
        >
          Tell me more
        </button>
      </div>

      <div id="end" className="flex justify-center mt-8">
        <img
          src="/modern-abstract-fire-swirl-logo-design_1262165-3572.avif"
          alt="Logo"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}

