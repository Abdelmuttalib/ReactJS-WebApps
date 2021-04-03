import React from 'react';
import { Grid, Card, Paper, CardContent, CardMedia, CardActions, Collapse, IconButton, Typography } from '@material-ui/core';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Directions } from '@material-ui/icons';
// import { BrowserRouter as Router,Link } from 'react-router-dom';


const RegularCard = ({ imgUrl }) => {


    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 300,
          height: 382,
          margin: 'auto',
          boxShadow: 'none',
          borderRadius: '0 0 5px 5px'
        },
        title: {
            // color: theme.palette.colors.darkBlue,
            blend: 'pass through',
            fontWeight: '800',
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '24px',
            fontFamily: 'Inter',
        },
        brief: {
            color: theme.palette.text.secondary,//'#718096',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '17px',
            marginTop: 15,
            marginRight: 5
        },
        media: {
            height: '179px',
            // paddingTop: '56.25%', // 16:9
          },
          cardFooter: {
              display: 'flex',
              flexDirections: 'row',
              justifyContent: 'space-between',
              marginTop: 22,
              marginRight: '10px'
          },
          date: {
              color: theme.palette.text.secondary,
              width: '92px',
              height: '15px',
              fontWeight: 'normal',
              fontStyle: 'normal',
              fontSize: 12,
            //   lineHeight: 14,
            //   color: theme.palette.colors.lightGray
          },
          readMore: {
            width: '63px',
            height: '15px',
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: 12,
          //   lineHeight: 14,
            // color: theme.palette.colors.darkBlue
          }
      }));


      const classes = useStyles();
      


    return (
        <Paper elevation={2}>
        <Card className={classes.root}>
        <CardMedia
            className={classes.media}
            image={imgUrl}
        />
        <CardContent className={classes.content}>
            <Typography className={classes.title}>
                long established
            </Typography>

            <Typography variant="body2" className={classes.brief} component="p">
            It is a long established fact that a reader will be distracted by the readable content of 
            a page when looking at its layout. The point of using Lorem Ipsum is that....
            </Typography>

            <div className={classes.cardFooter}>
            <Typography className={classes.date}>
                May 20th 2020
            </Typography>

            <Typography className={classes.readMore}>
                Read more
            </Typography>
            </div>
        </CardContent>
    </Card>
    </Paper>
    )
}

export default RegularCard;
