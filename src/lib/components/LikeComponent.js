import React, { Component } from "react";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class LikeComponent extends Component {

  render() {

    const saveList = [
      { 
        href: "store.html",
        img: "img/store1.jpg",
        favorite: "HOT",
        title_name: "NAME",
        content: "Lorem ipsum dolor sit amet consectetur ",
        star: [1,1,1,1,0],
        star1: 3,
        gray: 308,
      },
      { 
        href: "store.html",
        img: "img/store2.jpg",
        favorite: "HOT",
        title_name: "NAME",
        content: "Lorem ipsum dolor sit amet consectetur ",
        star: [1,1,1,1,0],
        star1: 3,
        gray: 291,
      },
      { 
        href: "#",
        img: "img/store3.jpg",
        favorite: "",
        title_name: "NAME",
        content: "Lorem ipsum dolor sit amet consectetur ",
        star: [1,1,1,0,0],
        star1: 3,
        gray: 51,
      },
    ]

    return (
      <>
        <div className="page-content header-clear-medium color-white">
          <div className="content-title">
            <p>SAVE LIST</p>
          </div>

          <Card >
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
             
              image="../img/store1.jpg"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            
          </Card>

       
        </div>
      </>
    );
  }
}

export default LikeComponent;
