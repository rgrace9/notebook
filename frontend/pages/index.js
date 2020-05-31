import Head from "next/head";
import Markdown from "../components/Markdown";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let notes = [];
    localStorage.setItem("notes", JSON.stringify(notes));
  }, []);
  return (
    <div className="container">
      <Markdown />
    </div>
  );
}
