import React from "react";

export function About() {
  return (
    <section className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          About PlayWise
        </h1>

        <p className="text-base sm:text-lg leading-relaxed mb-4">
          <strong>PlayWise</strong> is a React + Redux Toolkit web app that
          helps gamers find the best deals on video games across multiple online
          stores. It uses the{" "}
          <a
            href="https://apidocs.cheapshark.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            CheapShark API
          </a>{" "}
          to fetch real-time deals, price history, and store info, all in one
          fast, easy-to-use interface.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mb-4">
          You can search for games, explore trending deals, view detailed
          pricing insights, and save games to your personal wishlist for later.
          Every game card includes a direct link to buy from verified retailers.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mb-4">
          Built with modern frontend tools like <strong>Vite</strong>,{" "}
          <strong>React Router</strong>, and <strong>Redux Toolkit</strong>, and
          styled using <strong>Tailwind CSS</strong>, PlayWise is optimized for
          performance and responsiveness.
        </p>

        <p className="text-base sm:text-lg leading-relaxed italic mb-6">
          This project is part of my personal journey as a front-end developer
          to create polished, real-world apps that are visually engaging, fast,
          and intuitive.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
          <a
            href="https://github.com/Abdulaziz-Abukar/playwise"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-5 py-2 rounded hover:bg-gray-700 transition"
          >
            View Source on GitHub
          </a>

          <a
            href="https://dev-abdulaziz-abukars-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Visit My Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
