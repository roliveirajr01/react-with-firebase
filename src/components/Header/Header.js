import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ImageLogo from "../../surfing.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Header = ({ backButton }) => {
  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <Link to="/">
          <IconButton conClick={() => history.replace(backButton)}>
            <ArrowBackIosIcon className="header_icon" fontSize="large" />
          </IconButton>
        </Link>
      ) : (
        <Link to="/login">
          <IconButton>
            <PersonIcon className="header_icon" fontSize="large" />
          </IconButton>
        </Link>
      )}

      <Link to="/">
        <IconButton>
          <img
            className="header_logo"
            src={ImageLogo}
            alt="logo"
            title="logo"
          />
        </IconButton>
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header_icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
