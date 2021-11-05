import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
        palette: {

        dark:{
             main: '#333333',
             contrastText: '#fff'
        }       
    },
  });

const AudioList = ({ tracks, trackIndex, setTrackIndex, playlist, handleClickUpdateTrackIndex }) => {
    return (
        < div className="playlist no_drag" >
            {//console.log(playlist)
            }
            < ul className="lista" style={{listStyle:"none"}}>
                {
                    playlist.tracks.map((track, i) => (
                        <li
                            className={'tracklist'}
                            key={i}
                        >


                    <div className="grid-cards" style={{ display: "grid", gridTemplateColumns: "10% 50%", gap: "10px" }}>
                        <div className="playlist_btns_group">
                                <ThemeProvider theme={darkTheme}>
                                    <Button  
                                        onClick={(e) => {
                                            handleClickUpdateTrackIndex(e, i);
                                        }}
                                        className="fav_song playlist_btn"
                                        variant="contained"
                                        color="dark"
                                        endIcon={<SendIcon />} >
                                    
                                        </Button>
                                </ThemeProvider>
                                </div>
                            <div className="songmeta_playlist">
                                <span className="trackname">{track.name}<br /></span>
                                <span className="artistsname">{'track.artists.name'}</span>
                            </div>
                        </div>
                        </li>
                    ))
                }
            </ul >
        </div >
    );
};


export default AudioList;