import React, { useState } from "react";
import "./EventsSlider.css";
import { Modal, List, Fieldset, ProgressBar } from "@react95/core";
import Button from "@react95/core/Button";

function EventSlider(props) {
  const [currIndex, setCurrIndex] = useState(0);
  const movieCount = props.movies.length;
  const currMovie = props.movies[currIndex];
  return (
    <Modal
      className="event-slider"
      icon="camera"
      title="Movie Club"
      menu={[
        {
          name: "File",
          list: (
            <List>
              <List.Item onClick={() => {}}>Exit</List.Item>
            </List>
          )
        },
        {
          name: "Edit",
          list: (
            <List>
              <List.Item>Copy</List.Item>
            </List>
          )
        }
      ]}
    >
      <Fieldset
        className="movie-set"
        legend={`${currMovie.title} - ${currMovie.date}`}
      >
        <img src={currMovie.img} alt={currMovie.title} />
      </Fieldset>
      <div className="event-slider-ctl">
        <ProgressBar
          className="progress"
          width={380}
          percent={movieCount > 1 ? (currIndex / (movieCount - 1)) * 100 : 69}
        />
        <Button
          className="event-slide-back"
          onClick={() => {
            if (currIndex === 0) {
              setCurrIndex(movieCount - 1);
            } else {
              setCurrIndex((currIndex - 1) % movieCount);
            }
          }}
        >
          <span>Back</span>
        </Button>
        <Button
          className="event-slider-next"
          onClick={() => {
            setCurrIndex((currIndex + 1) % movieCount);
          }}
        >
          <span>Next</span>
        </Button>
      </div>
    </Modal>
  );
}

export default EventSlider;
