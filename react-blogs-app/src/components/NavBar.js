import React from 'react';
import { AppBar, Toolbar, Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SearchBar from './SearchBar';

const NavBar = () => {

    const useStyles = makeStyles((theme) => ({

          menuButton: {
            marginRight: theme.spacing(2),
          },
          title: {
            fontSize: '20px',
            width: '102px',
            height: '24px',
            fontStyle: 'normal',
            fontWeight: 'bolder',
            paddingLeft: '50px'
          },
          appBar: {
            height: '85px',
            backgroundColor: theme.palette.background.paper,
            paddingLeft: '1.4em',
          },
          toolBar: {
            height: '100%',
            justify: 'center',
            alignItems: 'center',
            alignContent: 'center',
          },
          gridContainer: {
            // color: 'black'
          },
          // textField: {
          //   height: '38px',
          //   margin: '5px'
          // },
          homeArticles: {
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
          },
          icon: {
            color: theme.palette.icons
          }
    }));


    const classes = useStyles();

    
    return (
      <Paper elevation={0}>
        <AppBar className={classes.appBar} color='primary.main' position="static">
            <Toolbar className={classes.toolBar}>
              <Grid item sm={12} md={12} lg={12}>
                <Grid container className={classes.gridContainer}>
                  <Grid item sm={4} md={4} lg={4}>
                    <Typography className={classes.title}>
                    HotCoffee
                    </Typography>
                  </Grid>

                  
                  <Grid item sm={8} md={8} lg={8}>
                    <Grid container justify='space-around'>
                      <Grid item>
                      <SearchBar />
                      </Grid>
                      
                      <Grid item>
                    <Grid container spacing={4}>
                        <Grid item>
                          <Typography className={classes.homeArticles}>Home</Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.homeArticles}>Articles</Typography>
                        </Grid>
                        <Grid item className={classes.icon}>
                            <InstagramIcon />
                        </Grid>
                        <Grid item  className={classes.icon}>
                            <TwitterIcon />
                        </Grid>
                        <Grid item  className={classes.icon}>
                            <LinkedInIcon />
                        </Grid>
                    </Grid>
                    </Grid>
                    </Grid>

                    </Grid>

                </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        </Paper>
    )
}

export default NavBar;