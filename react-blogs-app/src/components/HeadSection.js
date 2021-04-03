import React from 'react';
import { Grid, Box, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const HeadSection = ({ imgUrl }) => {

    const useStyles = makeStyles(theme => ({
        headSection: {
            background: theme.palette.background.default, // FBFBFB
            width: '100%',
            height: '467px',
            margin: 'auto',
        },
        // container: {
            
        // },
        imagePlace: {
            height: '323px',
            width: '476px'
        },
        // paper: {
        //     height: 323,
        //     width: 476,
        //   },
        sectionHead: {
            fontWeight: '800',
            fontStyle: 'normal',
            fontSize: '60px',
            lineHeight: '71px'
        },
        sectionQuestion: {
            color: theme.palette.text.secondary,
            fontWeight: '400',
            fontStyle: 'normal',
            fontSize: '30px',
            lineHeight: '35px',
            paddingTop: '25px'
        },
        // coffeeImage: {
        //     width: '70px',
        //     height: '67px',
        //     blend: 'pass through',
        //     transform: 'rotate(-23.28deg)',
        //     position: 'absolute',
        //     left: '33%',
        //     right: '65.92%',
        //     top:'58.23%',
        //     bottom:'38.42%'
        // },
        typographySection: {
            width: '356px',
            height: '144px',
            blend: 'pass throgh',
            alignContent: 'center',
            alignItems: 'center'
        }
    }));
    
    const classes = useStyles();

    return (
        <Paper elevation={0} square>
        <Box className={classes.headSection} component='div'>
                <Grid container className={classes.headSection} justify='center' alignItems='center' alignContent='center' spacing={7}>
                    
                    <Grid item>

                        <Grid container className={classes.typographySection} alignContent='center' alignItems='center' spacing={0}>
                            <Grid item>
                                <Typography className={classes.sectionHead}>
                                    Make better coffee
                                </Typography>
                            </Grid>

                            {/* <Grid item>
                                <Paper className={classes.coffeeImage} elevation={5}/>
                            </Grid> */}

                            <Grid item>
                                <Typography className={classes.sectionQuestion}>
                                    why learn how to blog?
                                </Typography>
                            </Grid>
                        </Grid>
                        
                    </Grid>

                    <Grid item>
                        <Grid container>
                            <Grid item>
                                <img className={classes.imagePlace} src={imgUrl}/>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>  
        </Box>
        </Paper>
    )
}

export default HeadSection;
