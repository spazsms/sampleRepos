import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import ProfileBar from "./ProfileBar";
import Filter from "./Filter";

export default function HomeLayout() {
  return (
    <div
      className="mainFlex"
      style={{
        display: "flex",
        height: "100vh", // root level takes full height
      }}
    >
      {/* Thin vertical sidebar */}
      <div
        className="sideBar"
        style={{
          width: "50px",
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#0f1e35",
        }}
      >
        <SideBar />
      </div>

      {/* Right section (nav + profile + main content) */}
      <div
        className="dataElements"
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: "5px",
        }}
      >
        {/* Top NavBar */}
        <div
          className="NavBar"
          style={{
            height: "40px",
            backgroundColor: "#152840",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            flexShrink: 0,
          }}
        >
          <NavBar />
        </div>

        {/* Bottom section: ProfileBar + Outlet */}
        <div
          className="eleProfile"
          style={{
            display: "flex",
            flexGrow: 1,
            overflow: "hidden",
            gap: "5px", // ensures Outlet scrolls within
          }}
        >
          {/* Profile Sidebar */}
          <div
            className="profileBar"
            style={{
              width: "210px",
              backgroundColor: "#152840",
              borderRadius: "5px",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ProfileBar />
          </div>

          {/* Main Content Area */}
          <div
            className="elements"
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              gap: "5px",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "100%",
                height: "50px",
              }}
            >
              <Filter />
            </div>
            <div
              className="outlet"
              style={{
                flexGrow: 1,
                overflowY: "auto",
              }}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
