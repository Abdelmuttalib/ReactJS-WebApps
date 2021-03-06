import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, CardMedia, Card, CardHeader, CardContent, CardActionArea, CardActions, Button, Typography, IconButton, Icon } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';


const Product = ({ name, price, image, content }) => {

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140
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
            image={image}
            title="Nice Product" />
            <CardContent onClick={(ev) => console.log("S: ", ev, ev.target.innerText)}>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Typography variant="h6" align="center" gutterBottom display="block">
          {price}
          </Typography>
          <CardActions>
            <Button 
            style={{width: '100%', height: '3em', margin: 'auto', marginBottom: '0.7em', marginTop: '0.5em'}} 
            size="large" 
            color="secondary" 
            variant="contained" 
            startIcon={<AddShoppingCartIcon />}>
            Add To Card
            </Button>
          </CardActions>
        </Card>
        </>
    )
}

export default Product
