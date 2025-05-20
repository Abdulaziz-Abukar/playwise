import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 text-sm py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
        <p>© {new Date().getFullYear()} PlayWise. Built by Abdulaziz Abukar</p>
        <div className="space-x-4">
          <a
            href="https://github.com/Abdulaziz-Abukar/playwise"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub Repo
          </a>
          <a
            href="https://abdulaziz-abukar.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
}
