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
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
        palette: {

        dark:{
             main: '#333333',
             contrastText: '#fff'
        }       
    },
  });

function AudioCards(props) {
    return (
        <div className="grid-cards" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
            {//console.log(props.albums)}
            }
            {props.albums.map((album, index) => (
                <Card sx={{ maxWidth: 345, borderRadius: 1, margin:6, paddingBottom:2}} key={index}>
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
                    <ThemeProvider theme={darkTheme}>
                    <Button variant="contained" color="dark" className={album.name}
                        onClick={(e) => props.updatePlaylist(e, props.albums[index])} >
                        <i className={album.name}> Escuchar Playlist</i>
                    </Button>
                    </ThemeProvider>
                </Card>
            ))
            };
        </div >
    );

}

export default AudioCards;