import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Footer = () => {

    const useStyles = makeStyles(theme => ({

        container: {
            display: 'inline-block',
            width: '100%',
            display: 'flex',
            height: '78px',
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            marginTop: '3.6em',
            alignContent: 'center',
            alignItems: 'center'
        },
        copyrightTitle: {
            width: '337px',
            height: '19px',
            blend: 'pass throght',
            fontWeight: '700',
            fontStyle: 'normal',
            fontSize: '16px',
            lineHeight: '19px',
            fontFamily: 'Inter'
        },
        icon: {
            // color: theme.palette.colors.icon //'#454444'
        },
        itemone: {
            marginRight: '2.5em'
        },
        itemtwo: {
            marginLeft: '2em'
        }
    }));

    const classes = useStyles();
    return (
        <>
        {/* <div className={classes.footer}> */}
        <Paper elevation={2} square>
            <Grid container className={classes.container} justify='center'>

                <Grid item lg={4} className={classes.itemone}>
                    <Typography className={classes.copyright}><span className={classes.copyrightTitle}>hotcoffee</span> 2020 copyright all rights reserved</Typography>
                </Grid>


                <Grid item lg={4} className={classes.itemtwo}>
                    <Grid container justify='flex-end'>
                        <Grid item lg={3}>
                            <Grid container justify='space-between'>
                                <Grid item className={classes.icon}>
                                    <InstagramIcon />
                                </Grid>
                                <Grid item className={classes.icon}>
                                    <TwitterIcon/>
                                </Grid>
                                <Grid item className={classes.icon}>
                                    <LinkedInIcon />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            </Paper>
        {/* </div> */}
        </>
    )
}

export default Footer;
