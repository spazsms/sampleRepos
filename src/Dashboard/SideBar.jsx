import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faQuestion, faSun } from "@fortawesome/free-solid-svg-icons";
import { useGameContext } from "./Context";
import { games } from "./Array";

export default function SideBar() {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/nowhere");
  // };

  //working code for fetching data from Objects.js
  // const game = useGameContext();
  // // console.log(game);
  // const currentGame = games.find(({ gameName }) => gameName === game);
  // if (!game) return console.log("No Game Data");

  // const handleClick = () => {
  //   if (currentGame) {
  //     console.log(currentGame.gameName);
  //     console.log(currentGame.backgroundImg);
  //     console.log(currentGame.gameTitle);
  //     console.log(currentGame.subTitle);
  //     console.log(currentGame.titleImg);
  //     console.log(currentGame.cardsData);
  //   } else {
  //     console.log("No game selected or game not found.");
  //   }
  // };

  const { selectGame, selectedGame } = useGameContext();

  // const currentGame = games.find(({ gameName }) => gameName === selectedGame);

  // console.log("selectedGame from context:", selectedGame);
  // console.log("currentGame:", currentGame);

  const logo = [
    {
      id: 1,
      gameName: "fortnite",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s",
    },
    {
      id: 2,
      gameName: "cs2",
      link: "https://cdn2.steamgriddb.com/icon/e67a27ba8bb6ba92dc274342c874d373.png",
    },
    {
      id: 3,
      gameName: "apex",
      link: "https://www.freepnglogos.com/uploads/apex-legends-logo-png/apex-game-png-logo-21.png",
    },
    {
      id: 4,
      gameName: "dota",
      link: "https://images.seeklogo.com/logo-png/28/2/dota-2-logo-png_seeklogo-284923.png",
    },
    {
      id: 5,
      gameName: "pubg",
      link: "https://static.cdnlogo.com/logos/p/57/pubg.png",
    },
    {
      id: 6,
      link: "https://elitedias.com/wp-content/uploads/2022/07/Valorant-450x450.png",
    },
    {
      id: 7,
      link: "https://images.dwncdn.net/images/t_app-icon-l/p/b6edf35d-fd1f-4f0b-9091-8a6d211d437a/4249580649/7441_4-10907539-imgingest-3330075702710465621.png",
    },
    {
      id: 8,
      link: "/more.png",
    },
  ];

  const options = [
    {
      id: 1,
      type: "img",
      link: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
    },
    {
      id: 2,
      type: "icon",
      component: <FontAwesomeIcon icon={faQuestion} color="white" />,
    },
    {
      id: 3,
      type: "icon",
      component: <FontAwesomeIcon icon={faSun} color="white" />,
    },
    {
      id: 4,
      type: "icon",
      component: <FontAwesomeIcon icon={faMoon} color="white" />,
    },
  ];

  return (
    <>
      <div
        className="sideItems"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          className="sideLogo"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "10px",
            gap: "5px",
          }}
        >
          {games.map((logos, index) => (
            <div key={index} className="logoItems">
              <img
                className="sideIcons"
                src={logos.iconLink}
                alt="logo"
                style={{
                  maxWidth: "25px",
                  height: "25px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  selectGame(logos.gameName); // ✅ set selected game
                }}
              />
            </div>
          ))}
        </div>
        <div
          className="sideOption"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "10px",
            gap: "10px",
          }}
        >
          {options.map((item, index) => (
            <div key={index} className="optionItems">
              {item.type === "img" ? (
                <img
                  src={item.link}
                  alt="option"
                  style={{ height: "15px", borderRadius: "5px" }}
                />
              ) : (
                item.component
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
