import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import Input from "./input";

const Header = ({
  logoSrc,
  title,
  searchPlaceholder,
  onChange,
  searchValue,
  onClearSearch,
}) => {
  const inputClass = onChange
    ? "seachHeader-container mx-4 d-flex align-items-center"
    : "d-none";

  const hamburgerClass = onChange ? "hamburger" : "d-none";

  return (
    <div className="SearchHeader py-1 pl-4 pr-0 d-flex align-items-center">
      <Link to="/">
        <div className="d-flex align-items-center">
          <img className="logo" src={logoSrc} alt="" />
          <div className="title pl-2 hide-for-mobile">
            Search
            <br />
            Hacker News
          </div>
        </div>
      </Link>

      <div className={inputClass}>
        <span>
          <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faSearch} />
        </span>
        <Input
          onChange={onChange}
          searchPlaceholder={searchPlaceholder}
          value={searchValue}
        />
        {searchValue && (
          <span onClick={onClearSearch} className="clearText">
            X
          </span>
        )}
        <div className="hide-for-medium d-flex">
          <div className="px-2 font-weight-bold hide-for-mobile">by</div>
          <Link>
            <img
              className="right-logo hide-for-small"
              src="/images/Algolia-logo.svg.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className={hamburgerClass}>
        <a href="">
          <FontAwesomeIcon icon={faSlidersH} />
        </a>
      </div>
    </div>
  );
};

export default Header;
