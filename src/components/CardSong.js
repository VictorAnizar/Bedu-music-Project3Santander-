import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const CardSong = (props)=> {
  

    return (
        <Card sx={{ maxWidth: 345, borderRadius:3 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: grey[900] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.song.title}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="250"
                image="https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Guitar"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Artist: {props.song.info.artist}
                    <br/>
                    Gender: {props.song.info.gender}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
               
            </CardActions>
           
        </Card>
    );
   
}

export default CardSong;