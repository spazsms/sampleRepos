import React, { useState } from "react";

export default function Filter() {
  const [query, setQuery] = useState("Search in Cyberpunk 2077");
  return (
    <>
      <div
        className="filterContainer"
        style={{
          background: "linear-gradient(135deg, #FCEE09, #FCEE09, #d20105)",
          height: "100%",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 100px",
        }}
      >
        <div
          className="forms"
          style={{
            display: "flex",
            height: "35px",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "35px",
            }}
          >
            <div
              className="lables"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.8)", // example background
                color: "white", // example text color
                paddingLeft: "10px",
                paddingRight: "5px",
                borderTopLeftRadius: "7px",
                borderBottomLeftRadius: "7px",
              }}
            >
              <label htmlFor="orderBy">Order by</label>
            </div>
            <select
              name="orderBy"
              id="orderBy"
              defaultValue=""
              style={{
                appearance: "none", // remove native arrow (for modern browsers)
                WebkitAppearance: "none", // Safari
                MozAppearance: "none", // Firefox
                backgroundColor: "rgba(0, 0, 0, 0.8)", // example background
                color: "white", // example text color
                paddingLeft: "10px",
                border: "none",
                width: "170px",
                borderTopRightRadius: "7px",
                borderBottomRightRadius: "7px",
                backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%23FCEE09" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
                backgroundSize: "16px",
                fontSize: "17px",
              }}
            >
              <option value="">Relevance</option>
              <option value="date">Date</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              height: "35px",
            }}
          >
            <select
              name="allPlatform"
              id="allPlatform"
              defaultValue=""
              style={{
                appearance: "none", // remove native arrow (for modern browsers)
                WebkitAppearance: "none", // Safari
                MozAppearance: "none", // Firefox
                backgroundColor: "rgba(0, 0, 0, 0.8)", // example background
                color: "white", // example text color
                paddingLeft: "10px",
                border: "none",
                width: "230px",
                borderRadius: "7px",
                backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%23FCEE09" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
                backgroundSize: "16px",
                fontSize: "17px",
              }}
            >
              <option value="" disabled hidden>
                All Platforms
              </option>
              <option value="relevance">Steam</option>
              <option value="date">Riot Games</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              height: "35px",
            }}
          >
            <div
              className="lables"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.8)", // example background
                color: "white", // example text color
                paddingLeft: "10px",
                paddingRight: "5px",
                borderTopLeftRadius: "7px",
                borderBottomLeftRadius: "7px",
              }}
            >
              <label htmlFor="orderBy">Region</label>
            </div>
            <select
              name="orderBy"
              id="orderBy"
              defaultValue=""
              style={{
                appearance: "none", // remove native arrow (for modern browsers)
                WebkitAppearance: "none", // Safari
                MozAppearance: "none", // Firefox
                backgroundColor: "rgba(0, 0, 0, 0.8)", // example background
                color: "white", // example text color
                paddingLeft: "10px",
                border: "none",
                width: "170px",
                borderTopRightRadius: "7px",
                borderBottomRightRadius: "7px",
                backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%23FCEE09" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
                backgroundSize: "16px",
                fontSize: "17px",
              }}
            >
              <option value="">Eurasia</option>
              <option value="date">Zealandia</option>
              <option value="date">North America</option>
              <option value="date">South America</option>
              <option value="date">Africa</option>
              <option value="date">Australia</option>
              <option value="date">Antarctica</option>
            </select>
          </div>
        </div>
        <div
          className="searchBar"
          style={{
            display: "flex",
            height: "35px",
          }}
        >
          <input
            type="text"
            placeholder="Search in Cyberpunk 2077"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)", // example background
              color: "white", // example text color
              paddingLeft: "10px",
              border: "none",
              width: "230px",
              borderRadius: "7px",
              fontSize: "17px",
            }}
          />
        </div>
      </div>
    </>
  );
}
