import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function AudioCards(props) {
    return (
        <div className="grid-cards" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
            {//console.log(props.albums)}
            }
            {props.albums.map((album, index) => (
                <Card sx={{ maxWidth: 345, borderRadius: 3 }} key={index}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: grey[700] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={'this.props.song.title'}
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height={album.images[1].height}
                        image={album.images[1].url}
                        alt={album.name}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {album.name}
                            <br />
                            {album.artists[0].name}
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
                    <button className={album.name}
                        onClick={(e) => props.updatePlaylist(e, props.albums[index])}>
                        <i className={album.name}>boton album - playlist</i>
                    </button>
                </Card>
            ))
            };
        </div >
    );

}

export default AudioCards;