import React from 'react';
import { Grid, Card, Paper, CardContent, CardMedia, IconButton,
    Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const CardLatest = ({ imgUrl }) => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          width: '966px',
          height: '243px',
          justifyContent: 'center',
          borderRadius: '5px 0px 0px 5px'
        },
        content: {
            width: '533px',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 54,
            marginTop: 20,
            gap: 27
        },
        title: {
            width: '246px',
            height: '36px',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '30px',
        },
        brief: {
            color: theme.palette.text.secondary,
            width: '403px',
            height: '51px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontweight: 'normal',
            fontSize: '14px',
            lineHeight: '17px',
            marginLeft: -2
        },
        cardFooter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 403,
            marginTop: 5
        },
        date: {
            color: theme.palette.text.secondary,
            width: '92px',
            height: '14px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '12px',
            lineHeight: '14px'
        },
        readMore: {
            // color: theme.palette.colors.darkBlue, //'#2D3748'
            width: '63px',
            height: '15px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '12px',
            lineHeight: '14px',
            // marginRight: '8em'
        },
        cover: {
          width: '433px',
          height: '100%'
        },
      }));


      const classes = useStyles();


    return (
        <Paper elevation={0.5}>
    <Card className={classes.root}>
        <CardContent className={classes.content}>

          <Typography className={classes.title}>
            long established
          </Typography>
          <Typography className={classes.brief}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
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

        <CardMedia
            className={classes.cover}
            image={imgUrl}
        />
    </Card>  
    </Paper>
    )
}

export default CardLatest;
