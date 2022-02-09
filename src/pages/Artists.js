import * as React from 'react';
import '../styles/Artists.css';
import mainImage from '../assets/mainBlur.jpg';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
        <>
            <div className="home" style={{ backgroundImage: `url(${mainImage})` }}>
                <div className="card">
                    <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: "#2d2d2d" }} aria-label="Marcus">
                            M
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Marcus Bell"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/static/images/cards/paella.jpg"
                        alt="Marcus Bell"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        He is especialist in triball tattoo...
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                        <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Biography:</Typography>
                        <Typography paragraph>
                            He started his career...
                        </Typography>
                        <Typography paragraph>
                            He went to Virginia College...
                        </Typography>
                        </CardContent>
                    </Collapse>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#2d2d2d" }} aria-label="Lisa">
                        L
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                        <MoreVertIcon />
                        </IconButton>
                    }
                    title="Lisa Valentine"
                    />
                    <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Lisa Valentine"
                    />
                    <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        She is especialist in realistic tattoo...
                    </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Biography:</Typography>
                        <Typography paragraph>
                        She started his career...
                        </Typography>
                        <Typography paragraph>
                        She went to North LV University...
                        </Typography>
                    </CardContent>
                    </Collapse>
                    </Card> 
                    <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#2d2d2d" }} aria-label="Sarah Clayton">
                        S
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                        <MoreVertIcon />
                        </IconButton>
                    }
                    title="Sarah Clayton"
                    />
                    <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Sarah Clayton"
                    />
                    <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        She is especialist in X tattoo...
                    </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Biography:</Typography>
                        <Typography paragraph>
                        She started her career...
                        </Typography>
                        <Typography paragraph>
                        She went to Luxor College...
                        </Typography>
                    </CardContent>
                    </Collapse>
                    </Card>
                </div>
            </div>
        </>
  );
}

