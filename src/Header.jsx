"use client";
import React from "react";
import "./Header.css";

export default function Header({ setForm }) {
  return (
    <header className="head">
      <img src="/civicLogo.svg" width="100px" alt="Civic Policy Archive Logo" />
      <nav className="navs">
        <button
          className="btn-head"
          onClick={() => setForm((prev) => !prev, console.log("working"))}
        >
          Add Podcast
        </button>
      </nav>
    </header>
  );
}
