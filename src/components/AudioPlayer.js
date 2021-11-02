import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";


const AudioPlayer = ({ playlist, trackIndex, setTrackIndex, setCurrentTrack, currentTrack }) => {

    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    console.log(trackIndex)

    // Destructure for conciseness
    const { name, audio_url } = playlist.tracks[trackIndex];
    //const color = '3'
    const artist = 'artist.name'
    const image = '3'


    // Refs
    const audioRef = useRef(new Audio(audio_url));
    const intervalRef = useRef();
    const isReady = useRef(false);

    // Destructure for conciseness
    const { duration } = audioRef.current;

    /*
    const currentPercentage = duration
        ? `${(trackProgress / duration) * 100}%`
        : "0%";
*/

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    const onScrub = (value) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    };

    const onScrubEnd = () => {
        // If not already playing, start
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    };

    const toPrevTrack = () => {
        if (trackIndex - 1 < 0) {
            setTrackIndex(playlist.tracks.length - 1);
        } else {
            setTrackIndex(trackIndex - 1);
        }
    };

    const toNextTrack = () => {
        if (trackIndex < playlist.tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    // Handles cleanup and setup when changing playlist
    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(audio_url);
        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [trackIndex]);

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    // VOLUME

    const [volume, setVolume] = useState(.1)

    const handleVolume = (value) => {
        setVolume(value)
        audioRef.current.volume = value
    }


    useEffect(() => {
        audioRef.current.volume = volume
    }, [volume, trackIndex])



    return (

        <div className="track-info">
            <img
                className="artwork"
                src={image}
                alt={`track artwork for ${name} by ${artist}`}
            />
            <h2 className="name">{name}</h2>
            <h3 className="artist">{artist}</h3>
            <AudioControls
                isPlaying={isPlaying}
                onPrevClick={toPrevTrack}
                onNextClick={toNextTrack}
                onPlayPauseClick={setIsPlaying}
            />
            <input
                type="range"
                value={trackProgress}
                step="1"
                min="0"
                max={duration ? duration : `${duration}`}
                className="progress"
                onChange={(e) => onScrub(e.target.value)}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}

            />
            <input
                value={Math.round(volume * 100)}
                type="range"
                name="volBar"
                id="volBar"
                onChange={(e) => handleVolume(e.target.value / 100)}
            />
        </div>
    );
};

export default AudioPlayer;
