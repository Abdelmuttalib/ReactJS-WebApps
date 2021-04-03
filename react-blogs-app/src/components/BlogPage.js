import React from 'react';
import NavBar from './NavBar';
import { Card, CardMedia, Grid, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';

const BlogPage = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '973px',
          height: '380px',
          display: 'flex',
          borderRadius: '0'
        //   justifyContent: 'center',
        //   borderRadius: '0px',
        //   alignContent: 'center',
        //   alignItems: 'center',
        //   boxShadow: 'none'
        },
        cover: {
          width: '100%',
          height: '100%'
        },
      }));


      const classes = useStyles();


    return (
        <>
            <NavBar />
            <Grid container justify='center'>

                <Grid item>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.cover}
                            image='https://images.squarespace-cdn.com/content/v1/5be5cce231d4df83ee9cbea4/1605114603764-ZG341K0HG6Y1MQ9U8QD8/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/image.jpg?format=2500w'
                        />
                    </Card>
        </Grid>
    </Grid>
    </>
    )
}

export default BlogPage;
