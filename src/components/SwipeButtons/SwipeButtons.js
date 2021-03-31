import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon fontSize="medium" className="swipeButtons_repeat"/>
      </IconButton>

      <IconButton>
        <CloseIcon fontSize="medium" className="swipeButtons_close"/>
      </IconButton>

      <IconButton>
        <StarRateIcon fontSize="medium" className="swipeButtons_star"/>
      </IconButton>

      <IconButton>
        <FavoriteIcon fontSize="medium" className="swipeButtons_favorite" />
      </IconButton>

      <IconButton>
        <FlashOnIcon fontSize="medium" className="swipeButtons_lightning"/>
      </IconButton>

    </div>
  );
};

export default SwipeButtons;
