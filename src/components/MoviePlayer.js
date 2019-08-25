import React from 'react'
import ReactPlayer from 'react-player'
import { Modal } from '@react95/core';
import './MoviePlayer.css'
function MoviePlayer(props) {
    return (
    <Modal
        className="movie-player"
        icon="camera"
        defaultPosition={{x: -650, y: 150}}
        title="Lesh Tonight">
        <ReactPlayer
            className='react-player'
            loop
            url={props.url}>
        </ReactPlayer>
    </Modal>
    )
}

export default MoviePlayer;