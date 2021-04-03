import React from 'react';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

const SeeMoreButton = () => {

    const useStyles = makeStyles(theme => ({
        container: {
            width: '966px',
            height: '100px',
            margin: '-50px auto',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignContent: 'center',
            alignItems: 'center'
        },
        label: {
            width: '84px',
            height: '20px',
            marginTop: '9px',
            marginBottom: '9px',
            fontSize: '16px',
            fontFamily: 'Inter',
            fontWeight: 'bold',
            lineHeight: '19px',
        },
        button: {
            backgroundColor: '#6B46C1',
            color: '#fff',
            width: 122,
            height: 37,
            display: 'inline-block',
            display: 'flex',
            flexDirection: 'row',
            padding: '0px',
            alignItems: 'center',
            alignContent: 'center',
            textTransform: 'none',
            // margin: '31px 93px 43px 937px',
            justifyContent: 'center',
        '&:hover': {
            backgroundColor: '#4d2d9c',
        }},
        icon: {
            width: 20,
            height: 20,
            marginRight: '0.2em'
        },
        
    }));


    const classes = useStyles();
    
    return (
        <Paper elevation={0}>
        <div className={classes.container}>
            <Button className={classes.button} color='secondary' variant="contained">
                <span className={classes.label}>See more</span>
                <ArrowDropDownCircleIcon className={classes.icon} />
            </Button>
        </div>
        </Paper>
    )
}

export default SeeMoreButton;
