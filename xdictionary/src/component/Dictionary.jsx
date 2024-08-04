import React, { useState } from "react";

export default function Dictionary() {
  const dictWord = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleChange = (event) => {
    event.preventDefault();

    const foundWord = dictWord.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    setDefinition(
      foundWord ? foundWord.meaning : "Word not found in the dictionary."
    );
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <form onSubmit={handleChange}>
        <input
          type="text"
          id="word"
          value={searchTerm}
          placeholder="Search for a word..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>search</button>
        <h3 style={{ margin: "0px" }}>Definition:</h3>
        <p>{definition}</p>
      </form>
    </>
  );
}
