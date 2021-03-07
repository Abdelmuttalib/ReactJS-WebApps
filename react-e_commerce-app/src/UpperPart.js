import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Repeat } from '@material-ui/icons';


const UpperPart = ({ title, img }) => {
    
    const useStyles = makeStyles({

        wallpaper: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url('${img}')`,
            height: 400,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '4em'
        }
    });
// products https://www.volusion.com/blog/content/images/2018/02/0227_HowToPriceItems_B--1-.png
// cart https://media.istockphoto.com/photos/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-picture-id1206800961?k=6&m=1206800961&s=612x612&w=0&h=XTcMw90XcgIFRuZvZ_B7q6D5X92-8hcDZ-J_HYh3Sas=
// home https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80
// h2 https://images.pexels.com/photos/3312030/pexels-photo-3312030.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
    const classes = useStyles();

    return (
        <Box className={classes.wallpaper}>
            <Box>{title}</Box>
        </Box>
    )
}

export default UpperPart
