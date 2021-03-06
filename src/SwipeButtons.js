import React from "react";
import "./SwipeButton.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButton__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__cloze">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__Flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
