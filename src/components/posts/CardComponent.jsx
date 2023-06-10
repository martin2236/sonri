import React,{useState} from 'react'
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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { motion, useScroll } from "framer-motion";

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

export const CardComponent = ({articulo}) => {
    const { scrollYProgress } = useScroll();
    const [expanded, setExpanded] = useState(false);
    const [color, setColor] = useState('gray');

    const changeColor = ()=>{
        if(color == 'gray'){
            setColor('#4f6cf4')
        }else{
            setColor('gray')
        }
        console.log(color)
    }

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card 
      component={motion.div}
      initial={{ x: '-100%' }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1 }}
      sx={{ maxWidth: 345, mt:3, mb:3}} raised>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#4f6cf4' }} aria-label="recipe">
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={articulo.titulo}
          subheader={articulo.fecha}
        />
        <CardMedia
          component="img"
          height="194"
          image={articulo.imagen}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {articulo.parrafo1}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={()=> changeColor()} aria-label="add to favorites">
            <FavoriteIcon sx={{color}}/>
          </IconButton>
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
            <Typography paragraph>
            {articulo.parrafo2}
            </Typography>
            <Typography paragraph>
            {articulo.parrafo3}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
}
