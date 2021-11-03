import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer';
import GridCardsSongs from './GridCardsSongs';
// import { Grid } from '@mui/material';

const ContentMain = ()=> {

    const [songs, setSongs] = useState(
        [
            {
                id: 11,
                title: "Song1",
                imgage: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1392f2e3-d214-440d-8a97-65e1d6f5a460/dcthe25-c3f48252-f92b-4e35-8462-ca3caaa4b09a.png/v1/fill/w_150,h_150,strp/_f2u__woods__by_raridecor_dcthe25-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUwIiwicGF0aCI6IlwvZlwvMTM5MmYyZTMtZDIxNC00NDBkLThhOTctNjVlMWQ2ZjVhNDYwXC9kY3RoZTI1LWMzZjQ4MjUyLWY5MmItNGUzNS04NDYyLWNhM2NhYWE0YjA5YS5wbmciLCJ3aWR0aCI6Ijw9MTUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.g4i7eTcNkKxKLk7zljaoSIpZ9BNWkZ1myTPsKV6yWuw",
                info: {
                    artist: "artistName",
                    gender: "genderName",
                    year: 2005
                }
            },
            {
                id: 12,
                title: "Song2",
                imgage: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1392f2e3-d214-440d-8a97-65e1d6f5a460/dcthe25-c3f48252-f92b-4e35-8462-ca3caaa4b09a.png/v1/fill/w_150,h_150,strp/_f2u__woods__by_raridecor_dcthe25-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUwIiwicGF0aCI6IlwvZlwvMTM5MmYyZTMtZDIxNC00NDBkLThhOTctNjVlMWQ2ZjVhNDYwXC9kY3RoZTI1LWMzZjQ4MjUyLWY5MmItNGUzNS04NDYyLWNhM2NhYWE0YjA5YS5wbmciLCJ3aWR0aCI6Ijw9MTUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.g4i7eTcNkKxKLk7zljaoSIpZ9BNWkZ1myTPsKV6yWuw",
                info: {
                    artist: "artistName",
                    gender: "genderName",
                    year: 2005
                }
            },
            {
                id: 13,
                title: "Song3",
                imgage: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1392f2e3-d214-440d-8a97-65e1d6f5a460/dcthe25-c3f48252-f92b-4e35-8462-ca3caaa4b09a.png/v1/fill/w_150,h_150,strp/_f2u__woods__by_raridecor_dcthe25-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUwIiwicGF0aCI6IlwvZlwvMTM5MmYyZTMtZDIxNC00NDBkLThhOTctNjVlMWQ2ZjVhNDYwXC9kY3RoZTI1LWMzZjQ4MjUyLWY5MmItNGUzNS04NDYyLWNhM2NhYWE0YjA5YS5wbmciLCJ3aWR0aCI6Ijw9MTUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.g4i7eTcNkKxKLk7zljaoSIpZ9BNWkZ1myTPsKV6yWuw",
                info: {
                    artist: "artistName",
                    gender: "genderName",
                    year: 2005
                }
            }
        ]
    )

    
        return (
            <div 
            className="content-main" 
            style={
                {
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent:"space-around", 
                    alignItems:"center",
                    flexWrap:"wrap"
                }}>
                <MusicPlayer style={{flexBasis: "30%"}}/>
                <GridCardsSongs songs={songs} style={{flexBasis: "70%"}}/>
            </div >
        );
    
}

export default ContentMain;