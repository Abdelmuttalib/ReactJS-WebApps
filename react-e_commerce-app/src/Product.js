import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, CardMedia, Card, CardHeader, CardContent, CardActionArea, CardActions, Button, Typography, IconButton, Icon } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';


const Product = ({ id, name, price, image, content }) => {

    const useStyles = makeStyles({
        root: {
            width: 330,
            maxHeight: 400
        },
        media: {
          height: 200,
          maxHeight: 200
        },
        content: {
          maxHeight: 100
        },
        bottom: {
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          margin: '1rem'
        },
        icon: {
          marginLeft: '6rem',
          color: '#ba000d'
        }
    });
    const classes = useStyles();
    console.log("CLASS: ", classes);

    return (
        <>
        <Card elevation={4} className={classes.root}>
          <CardActionArea>
            <CardMedia
            className={classes.media}
            image={image}/>
            <CardContent className={classes.content} onClick={(ev) => console.log("S: ", ev, ev.target.innerText)}>
              <Typography gutterBottom>
                {name}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p">
                {content}
              </Typography> */}
            </CardContent>
          </CardActionArea>
          <div className={classes.bottom}>
            <Typography variant="h6" align="center">
            $<span style={{ fontWeight: 'normal', marginLeft: '0.1rem', color: '#000' }}>{price}</span>
            </Typography>
            <CardActions>
              {/* <Button 
              onClick={() => {
                console.log("Added to Cart", `localhost:5000/product/${id}`);
              }}
              style={{ height: '3em', margin: 'auto', marginBottom: '0.7em', marginTop: '0.5em'}} 
              size="large" 
              color="secondary" 
              variant="contained" 
              startIcon={ */}
              <IconButton onClick={(e) => console.log("F: " + id, e)} className={classes.icon} color='secondary' edge='start' size='medium'>
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </div>
        </Card>
        </>
    )
}

export default Product
