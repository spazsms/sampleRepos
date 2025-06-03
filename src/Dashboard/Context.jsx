// // src/context.js
// import React, { createContext, useState, useContext } from "react";

// // Create the context
// const GameContext = createContext("fortnite");

// // Create the provider
// export const GameProvider = ({ children }) => {
//   return (
//     <GameContext.Provider value={"fortnite"}>{children}</GameContext.Provider>
//   );
// };

// // Custom hook for easy access
// export const useGameContext = () => useContext(GameContext);

//working version for fetching data
// import React, { createContext, useContext, useState } from "react";
// import { games } from "./objects"; // adjust path as needed

// const GameContext = createContext();

// export const GameProvider = ({ children }) => {
//   const [selectedGame, setSelectedGame] = useState("fortnite"); // or null / ID

//   return (
//     <GameContext.Provider value={(selectedGame, setSelectedGame)}>
//       {children}
//     </GameContext.Provider>
//   );
// };

// export const useGameContext = () => useContext(GameContext);

import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [selectedGame, setSelectedGame] = useState(null);

  const selectGame = (gameName) => {
    console.log("Context Game:", gameName);
    setSelectedGame(gameName);
  };

  return (
    <GameContext.Provider value={{ selectedGame, selectGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
