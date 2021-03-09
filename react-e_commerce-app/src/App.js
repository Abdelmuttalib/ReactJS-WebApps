import React, { useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { FormControl, Input, Typography, makeStyles } from '@material-ui/core';
import MuiAlert from "@material-ui/lab/Alert";
import ProductsPage from './ProductsPage';
import Home from './Home';
import Cart from './Cart';


// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const App = () => {


  const [users, setUsers] = useState({});
  const [user, setUser] = useState({});
  const [formSubmitted, setFormSubmitted] = useState({
        email: '',
        password: '',
        showPassword: false,
        authorized: false,
        checked: false,
        user: {}
      });




  const fetchUsers = async () => {
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json();
    console.log(typeof(users));

    return users;
    }


  const handleChangeEmail = (value) => {
      setFormSubmitted({ ...formSubmitted, email: value });
    };

    const handleChangePass = (value) => {
      setFormSubmitted({ ...formSubmitted, password: value });
    };
  
    // const handleClickShowPassword = () => {
    //   setFormSubmitted({ ...formSubmitted, showPassword: !formSubmitted.showPassword });
    // };

    // const handleMouseDownPassword = (event) => {
    //   event.preventDefault();
    // };


    
    const authorize = ({ email, password}) => {
      console.log(email, password);
      if(formSubmitted.authorized == false){
      users.map((user) => {
        if(user.email == email && user.password == password){
          console.log("SUCCESS: ", user.email, email, "O ", user.password, password);
          setFormSubmitted({...formSubmitted, authorized: true, checked: true, user: user});
        }else{
          console.log("IGNORED: ");
        }
      });
    }
  }

  useEffect(() => {
    const getUsersData = async () => {
    const liveUsersData = await fetchUsers();
    setUsers(liveUsersData);
    console.log("LIVE: ", liveUsersData);
  }

  getUsersData();
}, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    authorize(formSubmitted);
  };


    const useStyles = makeStyles({
      home: {
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80')`,
        height: '100vh',
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
     },
     inputForm: {
       height: '50%',
       width: '50%',
       justifyContent: 'space-evenly',
       alignItems: 'center',
       display: 'flex',
       flexDirection: 'column'
     },
    //,  // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
    //   welcome: {
    //     fontFamily: 'Courier View',
    //     fontWeight: '800',
    //     color: '#fff',
    //     textAlign: 'center',
    //     position: 'absolute',
    //     top: '8%'
    //   }
      });

  const classes = useStyles();

  


    return (
        <>
        <Router>
          <Route exact path='/' render={() => (
        !formSubmitted.authorized ? (<div className={classes.home}>
        <form className={classes.inputForm} onSubmit={(evt) => handleSubmit(evt)}>
        <Typography variant="h5">
          Login
        </Typography>
        <FormControl>
        <Input
          type='text'
          color='primary'
          placeholder='Email'
          value={formSubmitted.email}
          onChange={e => {
            setFormSubmitted({...formSubmitted, email: e.target.value });
          console.log("V1: ", e.target.value, "K: ", formSubmitted);
        }}
        />
        </FormControl>
        <FormControl>
        <Input
          className={classes.emailInput}
          placeholder='Password'
          type="password"
          value={formSubmitted.password}
          onChange={e => {
            setFormSubmitted({...formSubmitted, password: e.target.value });
          console.log("VALUE: ", e.target.value, "L: ", formSubmitted);}}
        />
        </FormControl>
        <FormControl>
        <Input
          className={classes.passInput}
          color="secondary"
          type='submit'
          onSubmit={e => console.log("DONE")}
        >
          Login
        </Input>
        </FormControl>
        </form>
        </div>)
          : <Redirect to='/Home'/> )}/>

          <Route path='/Home'>
            <Home userData={formSubmitted.user}/>
          </Route>

          <Route path='/Cart'>
            <Cart userData={formSubmitted.user}/>
          </Route>

          <Route path='/ProductsPage'>
            <ProductsPage userData={formSubmitted.user}/>
          </Route>

        </Router>
        </>
    )
}

export default App;
/** Fake Cart Data 
 * [{"id":1,"userId":1,"date":"2020-03-02T00:00:02.000Z","products":[{"productId":1,"quantity":4},{"productId":2,"quantity":1},{"productId":3,"quantity":6}],"__v":0},{"id":2,"userId":1,"date":"2020-01-02T00:00:02.000Z","products":[{"productId":2,"quantity":4},{"productId":1,"quantity":10},{"productId":5,"quantity":2}],"__v":0},{"id":3,"userId":2,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":1,"quantity":2},{"productId":9,"quantity":1}],"__v":0},{"id":4,"userId":3,"date":"2020-01-01T00:00:02.000Z","products":[{"productId":1,"quantity":4}],"__v":0},{"id":5,"userId":3,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":7,"quantity":1},{"productId":8,"quantity":1}],"__v":0},{"id":6,"userId":4,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":10,"quantity":2},{"productId":12,"quantity":3}],"__v":0},{"id":6,"userId":8,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":18,"quantity":1}],"__v":0}]

*/
/** Fake Users Data 
 * [{"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"new road","number":7682,"zipcode":"12926-3874"},"id":1,"email":"john@gmail.com","username":"johnd","password":"m38rmF$","name":{"firstname":"john","lastname":"doe"},"phone":"1-570-236-7033","__v":0},{"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"Lovers Ln","number":7267,"zipcode":"12926-3874"},"id":2,"email":"morrison@gmail.com","username":"mor_2314","password":"83r5^_","name":{"firstname":"david","lastname":"morrison"},"phone":"1-570-236-7033","__v":0},{"address":{"geolocation":{"lat":"40.3467","long":"-30.1310"},"city":"Cullman","street":"Frances Ct","number":86,"zipcode":"29567-1452"},"id":3,"email":"kevin@gmail.com","username":"kevinryan","password":"kev02937@","name":{"firstname":"kevin","lastname":"ryan"},"phone":"1-567-094-1345","__v":0},{"address":{"geolocation":{"lat":"50.3467","long":"-20.1310"},"city":"San Antonio","street":"Hunters Creek Dr","number":6454,"zipcode":"98234-1734"},"id":4,"email":"don@gmail.com","username":"donero","password":"ewedon","name":{"firstname":"don","lastname":"romer"},"phone":"1-765-789-6734","__v":0},{"address":{"geolocation":{"lat":"40.3467","long":"-40.1310"},"city":"san Antonio","street":"adams St","number":245,"zipcode":"80796-1234"},"id":5,"email":"derek@gmail.com","username":"derek","password":"jklg*_56","name":{"firstname":"derek","lastname":"powell"},"phone":"1-956-001-1945","__v":0},{"address":{"geolocation":{"lat":"20.1677","long":"-10.6789"},"city":"el paso","street":"prospect st","number":124,"zipcode":"12346-0456"},"id":6,"email":"david_r@gmail.com","username":"david_r","password":"3478*#54","name":{"firstname":"david","lastname":"russell"},"phone":"1-678-345-9856","__v":0},{"address":{"geolocation":{"lat":"10.3456","long":"20.6419"},"city":"fresno","street":"saddle st","number":1342,"zipcode":"96378-0245"},"id":7,"email":"miriam@gmail.com","username":"snyder","password":"f238&@*$","name":{"firstname":"miriam","lastname":"snyder"},"phone":"1-123-943-0563","__v":0},{"address":{"geolocation":{"lat":"50.3456","long":"10.6419"},"city":"mesa","street":"vally view ln","number":1342,"zipcode":"96378-0245"},"id":8,"email":"william@gmail.com","username":"hopkins","password":"William56$hj","name":{"firstname":"william","lastname":"hopkins"},"phone":"1-478-001-0890","__v":0},{"address":{"geolocation":{"lat":"40.12456","long":"20.5419"},"city":"miami","street":"avondale ave","number":345,"zipcode":"96378-0245"},"id":9,"email":"kate@gmail.com","username":"kate_h","password":"kfejk@*_","name":{"firstname":"kate","lastname":"hale"},"phone":"1-678-456-1934","__v":0},{"address":{"geolocation":{"lat":"30.24788","long":"-20.545419"},"city":"fort wayne","street":"oak lawn ave","number":526,"zipcode":"10256-4532"},"id":10,"email":"jimmie@gmail.com","username":"jimmie_k","password":"klein*#%*","name":{"firstname":"jimmie","lastname":"klein"},"phone":"1-104-001-4567","__v":0}]

*/