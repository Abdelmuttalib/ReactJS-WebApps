import React from 'react';
import { Grid, Card, Paper, CardContent, CardMedia, IconButton,
     Typography, SkipPreviousIcon, SkipNextIcon, PlayArrowIcon } from '@material-ui/core';
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
        <Grid container className={classes.container} justify='center' spacing={5}>

            <Grid item>
                <CardLatest />
            </Grid>

            <Grid item>
                <Grid container justify='center' spacing={4}>
                    <Grid item>
                        {/* <Paper className={classes.paper} elevation={8}/> */}
                        <RegularCard />
                    </Grid>
                    <Grid item>
                        <RegularCard />
                    </Grid>
                    <Grid item>
                        <RegularCard />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
              <LargeCard />
            </Grid>

        </Grid> 
    )
}

export default CardsSection;
