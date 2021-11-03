import React from "react";

const AudioList = ({ tracks, trackIndex, setTrackIndex, playlist, handleClickUpdateTrackIndex }) => {
    return (
        < div className="playlist no_drag" >
            {//console.log(playlist)
            }
            < ul className="lista" >
                {
                    playlist.tracks.map((track, i) => (
                        <li
                            className={'tracklist'}
                            key={i}
                        >

                            <div className="songmeta_playlist">
                                <span className="trackname">{track.name}<br /></span>
                                <span className="artistsname">{'track.artists.name'}</span>
                            </div>
                            <div className="playlist_btns_group">
                                <button
                                    onClick={(e) => {
                                        handleClickUpdateTrackIndex(e, i);
                                    }}
                                    className="fav_song playlist_btn">
                                    <i className="far fa-heart fa-lg">boton</i>
                                </button>

                            </div>
                        </li>
                    ))
                }
            </ul >
        </div >
    );
};


export default AudioList;