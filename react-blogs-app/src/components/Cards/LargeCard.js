import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const LargeCard = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          width: '965px',
          height: '500px',
          justifyContent: 'center',
          borderRadius: '0px',
          alignContent: 'center',
          alignItems: 'center',
          boxShadow: 'none'
        },
        content: {
            background: theme.palette.background.default,
            width: '440px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            gap: 27,
            justifyContent: 'center'
        },
        title: {
            width: '308px',
            height: '96px',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '40px',
            lineHeight: '48px'
        },
        brief: {
            color: theme.palette.text.secondary,
            width: '311px',
            height: '114px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontweight: '400',
            fontSize: '16px',
            lineHeight: '19px',
        },
        cardFooter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: 6,
            width: 403,
            marginTop: 5
        },
        date: {
            color: theme.palette.text.secondary,
            width: '57px',
            height: '19px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            marginRight: '5em'
        },
        readMore: {
            width: '84px',
            height: '19px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '19px'
        },
        cover: {
          width: '525px',
          height: '100%'
        },
      }));


      const classes = useStyles();


    return (
    <Card className={classes.root}>
        <CardContent className={classes.content}>

          <Typography className={classes.title}>
            What is Lorem Ipsum?
          </Typography>
          <Typography className={classes.brief}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...
          </Typography>

          <div className={classes.cardFooter}>
            <Typography className={classes.date}>
                May 20
            </Typography>

            <Typography className={classes.readMore}>
                Read more
            </Typography>
            </div>

        </CardContent>

        <CardMedia
            className={classes.cover}
            image='https://www.stepupsomerset.org.uk/SiteAssets/Images/Skills/Tech-IT-christopher-gower-m_HRfLhgABo-unsplash.jpg'
        />
    </Card>  
    )
}

export default LargeCard;
