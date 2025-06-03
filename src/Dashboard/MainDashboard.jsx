import { Link, Outlet } from "react-router-dom";
import Filter from "./Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faUser } from "@fortawesome/free-solid-svg-icons";
import { useGameContext } from "./Context";
import { games } from "./Array";

export default function MainDashboard() {
  const { selectedGame } = useGameContext();
  const currentGame = games.find((g) => g.gameName === selectedGame);

  if (!currentGame) return <p>No game selected</p>;

  const iconBundle = [
    {
      id: 1,
      link: <FontAwesomeIcon icon={faUser} color="#152840" />,
    },
  ];

  const stat = [
    {
      id: 1,
      number: "3200",
      desc: "Matches Played",
      link: <FontAwesomeIcon icon={faGift} color="white" />,
    },
    {
      id: 2,
      number: "235",
      desc: "Matches Played",
      link: <FontAwesomeIcon icon={faGift} color="white" />,
    },
  ];

  const profile = [
    {
      id: 1,
      link: "https://cdn-icons-png.flaticon.com/512/2348/2348811.png",
    },
    {
      id: 2,
      link: "https://cdn-icons-png.flaticon.com/512/5043/5043575.png",
    },
    {
      id: 3,
      link: "https://cdn-icons-png.flaticon.com/512/3049/3049965.png",
    },
    {
      id: 4,
      link: "https://cdn-icons-png.flaticon.com/512/8861/8861239.png",
    },
    {
      id: 5,
      link: "https://cdn-icons-png.flaticon.com/512/1031/1031379.png",
    },
  ];

  //added joe
  // const backgroudState = [
  //   "https://wallpapers.com/images/file/image-background-02pncybdeif1jvym.jpg",
  //   "https://th.bing.com/th/id/R.12d7a9f7f2b24adea85f87c511ca4c52?rik=CUCXgCmiGybB2w&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fBest-Free-nature-Images-hd.jpg&ehk=A%2fMmi34yK6d9JvrBJ3cxSAv%2fP%2fZqn7Rla6CwxQkYDXk%3d&risl=&pid=ImgRaw&r=0",
  //   "https://www.cyberpunk.net/build/images/home12/cover-1920-bd460362.jpg",
  // ];
  // const [counter, setCounter] = useState(0);
  // const adder = () => {
  //   console.log(counter);
  //   if (backgroudState.length - 1 === counter) {
  //     setCounter(0);
  //   } else {
  //     setCounter((prev) => prev + 1);
  //   }
  // };
  // useEffect(() => {
  //   // setTimeout(() => adder(), 1000);
  // }, [counter]);

  // added joe

  return (
    <div
      className="elementsContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "auto",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
          borderRadius: "5px",
          backgroundImage: `url(${currentGame.backgroundImg})`,
          // backgroundImage: `url(${backgroudState[counter]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // zIndex: "-1",
        }}
      >
        <div
          className="contentContainer"
          style={{
            height: "100%",
            position: "relative",
          }}
        >
          <div
            className="cardContainer"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 100px",
              paddingTop: "50px",
              gap: "80px",
            }}
          >
            <div
              className="topCard"
              style={{ display: "flex", flexDirection: "row", gap: "30px" }}
            >
              <div
                className="card"
                style={{
                  width: "10rem",
                  height: "15rem",
                  borderRadius: "10px",
                  backgroundImage: `url(${currentGame.titleImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  zIndex: "2",
                }}
              ></div>
              <div
                className="cardText"
                style={{
                  display: "flex",
                  flexGrow: "1",
                  flexDirection: "column",
                }}
              >
                <div
                  className="iconSection"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <button
                      className="members"
                      onClick={() => prompt("clicked")}
                      style={{
                        backgroundColor: "#152840",
                        padding: "5px 10px",
                        border: "none",
                        borderRadius: "7px",
                        color: "white",
                      }}
                    >
                      345 Members
                    </button>
                  </div>
                  <div
                    className="iconsImg"
                    style={{ padding: "0 20px", width: "10px" }}
                  >
                    {iconBundle.map(
                      (icons, index) => (
                        <div key={index}>{icons.link}</div>
                      )
                      // <img
                      //   key={index}
                      //   src={icons.link}
                      //   alt="icon"
                      //   style={{
                      //     height: "30px",
                      //   }}
                      // />
                    )}
                  </div>
                </div>
                <div
                  className="titleSection"
                  style={{
                    display: "flex",
                    flex: "3",
                    flexDirection: "column",
                  }}
                >
                  <p
                    className="bebas"
                    style={{
                      fontSize: "80px",
                      width: "50%",
                      lineHeight: ".8",
                      paddingTop: "15px",
                      margin: "0",
                    }}
                  >
                    COMPETE IN {currentGame.gameTitle}
                  </p>
                </div>
                <div
                  className="subTitleSection"
                  style={{
                    display: "flex",
                    flex: "1",
                    fontSize: "20px",
                    lineHeight: "1",
                    margin: "0",
                    paddingBottom: "50px",
                  }}
                >
                  <p>{currentGame.subTitle}</p>
                </div>
                {/* <div
                className="statisticSection"
                style={{
                  display: "flex",
                  flex: "1",
                  justifyContent: "space-between",
                  border: "1px solid red",
                }}
              >
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "50px" }}
                >
                  {stat.map((stats, index) => (
                    <div
                      key={index}
                      className="statIcon"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        alignItems: "center",
                        lineHeight: "1",
                      }}
                    >
                      <div>{stats.link}</div>
                      <div>
                        <div
                          className="statNo"
                          style={{ color: "white", fontSize: "30px" }}
                        >
                          {stats.number}
                        </div>
                        <div style={{ color: " #FCEE09" }}>{stats.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    border: "1px solid red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    <div>players</div>
                    <div>555</div>
                  </div>
                  <div className="prof">
                    {profile.map((prof, index) => (
                      <div key={index}>
                        <img
                          src={prof.link}
                          alt=""
                          style={{ borderRadius: "50px", width: "50px" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
              </div>
            </div>
            <div
              className="cardItems"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="ctext">
                <p
                  className="ftext"
                  style={{
                    fontSize: "30px",
                    fontWeight: "600",
                    lineHeight: "1",
                    letterSpacing: "2.5px",
                  }}
                >
                  FEATURED TOURNAMENTS
                </p>
                <p>Participants in contest and win prizes</p>
              </div>
              <div
                className="cardShow"
                style={{
                  display: "flex",
                  gap: "15px",
                }}
              >
                {currentGame.cardsData.map((cards) => (
                  <div
                    key={cards.cardId}
                    className="specificCard"
                    style={{
                      // border: "1px solid red",
                      // backgroundColor: "rgba(255, 255, 0, 1)",
                      // backgroundColor: "rgb(21, 40, 64)",
                      background:
                        "linear-gradient(180deg, #FCEE09,#FCEE09, #d4af37)",
                      boxShadow: "3px 0px 8px rgba(0, 0, 0, 0.25)",
                      width: "19rem",
                      height: "20rem",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      padding: "7px",
                      borderRadius: "15px",
                      gap: "15px",
                    }}
                  >
                    <div
                      className="cardI"
                      style={{
                        width: "100%",
                        height: "43%",
                        overflow: "hidden",
                        // border: "1px solid blue",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src={cards.cardImg}
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div
                      className="textC"
                      style={{ gap: "5px", color: "#152840" }}
                    >
                      <div className="dateC">
                        <p>{cards.cardDate}</p>
                      </div>
                      <div>
                        <p className="titleC" style={{ fontSize: "25px" }}>
                          {cards.cardTitle}
                        </p>
                      </div>
                      <div className="subTitleC">
                        <p>{cards.cardSubTitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              height: "70px",
              width: "89%",
              borderRadius: "20px",
              position: "absolute",
              left: "90px",
              right: "90px",
              top: "255px",
              display: "flex",
              // background:
              //   "linear-gradient(135deg, rgba(20, 40, 64, 1.0), rgba(20, 40, 64, 1.0),  rgba(21, 40, 64, 0.0), rgba(252, 238, 9, 0.0))",
              backgroundColor: "#152840",
              // backdropFilter: "blur(10px)",
              // WebkitBackdropFilter: "blur(10px)", // For Safari support
              // background:
              //   "linear-gradient(135deg, rgba(20, 40, 64, 1.0), rgba(20, 40, 64, 1.0),  rgba(21, 40, 64, 0.1), rgba(252, 238, 9, 0.0))", // or use a gradient
              // borderRadius: "12px",
              // padding: "20px",
              // color: "#ffff",
            }}
          >
            <div
              style={{
                paddingRight: "20px",
                paddingLeft: "202px",
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", gap: "50px" }}
              >
                {stat.map((stats, index) => (
                  <div
                    key={index}
                    className="statIcon"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      alignItems: "center",
                      lineHeight: "1",
                    }}
                  >
                    <div>{stats.link}</div>
                    <div>
                      <div
                        className="statNo"
                        style={{ color: "white", fontSize: "30px" }}
                      >
                        {stats.number}
                      </div>
                      <div style={{ color: "#FCEE09" }}>{stats.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "white",
                    lineHeight: "1",
                  }}
                >
                  <div>Players</div>
                  <div className="playerNo" style={{ fontSize: "30px" }}>
                    555
                  </div>
                </div>
                <div className="prof" style={{ display: "flex" }}>
                  {profile.map((prof, index) => (
                    <img
                      key={index}
                      src={prof.link}
                      alt=""
                      style={{
                        borderRadius: "50px",
                        width: "55px",
                        backgroundColor: "#0f1e35",
                        border: "5px solid #0f1e35",
                        marginLeft: index === 0 ? "0px" : "-18px", // overlap starts from 2nd image
                        zIndex: profile.length - index, // ensures later images are on top
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
