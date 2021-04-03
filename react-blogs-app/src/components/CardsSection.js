import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardLatest from './Cards/CardLatest';
import RegularCard from './Cards/RegularCard';
import LargeCard from './Cards/LargeCard';

const CardsSection = () => {

    const useStyles = makeStyles({
        // root: {
        //     flexGrow: 1,
        //   },
        container: {
            margin: '30px 0px',
            width: '100%'
        },
    });

    const classes = useStyles();


    return (
        <Paper elevation={0} square>
        <Grid container className={classes.container} justify='center' spacing={5}>

            <Grid item>
                <CardLatest imgUrl='https://images.squarespace-cdn.com/content/v1/5be5cce231d4df83ee9cbea4/1605114603764-ZG341K0HG6Y1MQ9U8QD8/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/image.jpg?format=2500w'/>
            </Grid>

            <Grid item>
                <Grid container justify='center' spacing={4}>
                    <Grid item>
                        {/* <Paper className={classes.paper} elevation={8}/> */}
                        <RegularCard imgUrl='https://www.stepupsomerset.org.uk/SiteAssets/Images/Skills/Tech-IT-christopher-gower-m_HRfLhgABo-unsplash.jpg'/>
                    </Grid>
                    <Grid item>
                        <RegularCard imgUrl='http://tunbancollection.com/wp-content/uploads/2020/10/20201023_153952.jpg'/>
                    </Grid>
                    <Grid item>
                        <RegularCard imgUrl='https://patrickgoode.com/wp-content/uploads/2020/12/jantine-doornbos-HvYy5SEefC8-unsplash1-640x381.jpg'/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
              <LargeCard />
            </Grid>

        </Grid> 
        </Paper>
    )
}

export default CardsSection;
