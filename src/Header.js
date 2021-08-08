import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ backButton }) {
  return (
    <div className="header">
      {backButton ? (
        <Link to="/">
          <IconButton>
            <ArrowBackIosIcon
              className="header__icons"
              color="disabled"
              fontSize="large"
            />
          </IconButton>
        </Link>
      ) : (
        <IconButton>
          <AccountCircleIcon
            className="header__icons"
            color="disabled"
            fontSize="large"
          />
        </IconButton>
      )}
      <img
        className="header__logo"
        src="https://www.vectorico.com/download/social_media/Tinder-Logo.jpg"
      />
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icons" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
