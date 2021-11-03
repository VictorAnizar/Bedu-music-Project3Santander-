import React from "react";
import AudioPlayer from "./AudioPlayer"
import AudioList from './AudioList';
import AudioCard from './AudioCard';
import Footer from './globals/Footer'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Descubre() {

const [isLoadingAlbums, setIsLoadingAlbums] = React.useState(true)
  const [albums, setAlbums] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://bedumusic.herokuapp.com/v1/albums/all?limit=3')
        const data = await response.json()
        //const artists = Object.values(data.artists).map(artist => artist.name)
        //console.log(artists.join(', '))
        //console.log(data);
        setAlbums(data);
        setIsLoadingAlbums(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    //console.log(data)
  }, []);


  //Playlist
  const [isLoadingPlaylist, setIsLoadingPlaylist] = React.useState(true)
  const [playlist, setPlaylist] = React.useState([]);
  const handleClickUpdatePlaylist = (e, album) => {
    console.log('handleClickUpdatePlaylist')
    setPlaylist(album);
    setIsLoadingPlaylist(false)
  }


  //const [playerList, setPlayerList] = React.useState([])
  const [trackIndex, setTrackIndex] = React.useState(0);
  const [currentTrack, setCurrentTrack] = React.useState({});
  React.useEffect(() => {
    const setTrack = () => {
      if (!isLoadingPlaylist) {
        setCurrentTrack(playlist.tracks[trackIndex])
        //console.log(trackIndex)
        //console.log(playlist.tracks[trackIndex])
      }
    };
    setTrack()
  }, [trackIndex]);

  const [isLoadingTrackIndex, setIsLoadingTrackIndex] = React.useState(true)

  const handleClickUpdateTrackIndex = (e, index) => {
    setIsLoadingTrackIndex(false)
    console.log('handleClickUpdateTrackIndex')
    setTrackIndex(index);
    console.log('TrackIndex: ' + index)

  }

  const [isLoadingPlayer, setIsLoadingPlayer] = React.useState(true)
  React.useEffect(() => {
    if (currentTrack) {
      setIsLoadingPlayer(false)
    }
  }, [currentTrack])

  return (
    <div className="layout">

      {isLoadingAlbums ?
        'loading...'
        : <AudioCard
          albums={albums}
          setPlaylist={setPlaylist}
          updatePlaylist={handleClickUpdatePlaylist}
          playlist={playlist}
        />}
      {isLoadingPlaylist ?
        'presiona un boton de album para continuar'
        : <AudioList
          //tracks={tracks}
          playlist={playlist}
          setTrackIndex={setTrackIndex}
          handleClickUpdateTrackIndex={handleClickUpdateTrackIndex}
        />}
      <br />
      {isLoadingTrackIndex ?
        'presiona un boton de cancion para continuar'
        : <AudioPlayer
          playlist={playlist}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          setCurrentTrack={setCurrentTrack}
          currentTrack={currentTrack} />}
      <Footer />
    </div >
  )
}

export default Descubre;