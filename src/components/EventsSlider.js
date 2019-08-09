import React from 'react';
import './EventsSlider.css'
import { Modal, List, Fieldset, ProgressBar } from '@react95/core';
import Button from '@react95/core/Button';

function EventSlider(props) 
{
  let curr_index = 0;
  const movie_count = props.movies.length;
  const curr_movie = props.movies[curr_index];
    return (
<Modal
  className="event-slider"
  icon="camera"
  defaultPosition={{x: -50, y: -50}}
  title="Movie Club"
  menu={[
    {
      name: 'File',
      list: (
        <List>
          <List.Item onClick={() => {}}>Exit</List.Item>
        </List>
      ),
    },
    {
      name: 'Edit',
      list: (
        <List>
          <List.Item>Copy</List.Item>
        </List>
      ),
    },
  ]}
  >
    <Fieldset className="movie-set" legend={`${curr_movie.title} - ${curr_movie.date}`}>
      <img src={curr_movie.img} alt={curr_movie.title}></img>
    </Fieldset>
    <div className="event-slider-ctl">
      <ProgressBar className="progress" width="380" percent={(curr_index+1/movie_count)*100}></ProgressBar>
    <Button className="event-slider-next">
      <span>Back</span>
    </Button>
    <Button className="event-slider-next">
      <span>Next</span>
    </Button>
    </div>
</Modal>
    )
}

export default EventSlider;