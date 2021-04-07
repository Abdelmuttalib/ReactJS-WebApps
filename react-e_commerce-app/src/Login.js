import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { FormControl, Input, InputLabel, Typography, Paper } from '@material-ui/core';
import { UserContext } from './UserContext';

const Login = () => {

    const {user, setUser} = useContext(UserContext);
    const [users, setUsers] = useState({});
    console.log("User in Login: ", user);

    const [formSubmitted, setFormSubmitted] = useState({
        email: '',
        password: '',
        authorized: false
    });

    useEffect(() => {
    const getUsersData = async () => {
        const liveUsersData = await fetchUsers();
        setUsers(liveUsersData);
        console.log("LIVE: ", liveUsersData);
        console.log('don@gmail.com', 'ewedon');
        }

    getUsersData();

    }, []);

    const fetchUsers = async () => {
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json();
    console.log(typeof(users));

    return users;
    }

    const authorize = (email, password) => {
        console.log(email, password);
        if(formSubmitted.authorized == false){
            users.map((user) => {
                if(user.email == email && user.password == password){
                console.log("SUCCESS: ", user.email, email, "O ", user.password, password);
                setUser(user.name.firstname);
                setFormSubmitted({...formSubmitted, authorized: true});
                
                    }else{
                console.log("IGNORED: ");
                    }
            });
        }
    }


    const handleChangeEmail = (value) => {
        setFormSubmitted({ ...formSubmitted, email: value });
      };
  
      const handleChangePassword = (value) => {
        setFormSubmitted({ ...formSubmitted, password: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(formSubmitted);
        authorize(formSubmitted.email, formSubmitted.password);
        console.log("By Default");
        console.log(formSubmitted.email, formSubmitted.password);
      };


    const useStyles = makeStyles({
        home: {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100%',
          position: 'absolute',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
       },
       loginForm: {
         height: '400px',
         width: '400px',
         backgroundColor: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))',
         justifyContent: 'space-evenly',
         alignItems: 'center',
         display: 'flex',
         flexDirection: 'column',
        //  transition: 'all 0.5s ease-in-out',
       },
       paper: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
       },
       formControl: {
           width: '60%',
           backgroundColor: 'secondary',
           alignContent: 'center',
           alignItems: 'center',
       },
       submitInput: {
           backgroundColor: '#000', // red #f44336 , darker red #ba000d
           borderRadius: 5,
           width: '70%',
           height: '3rem',
           padding: '1em 2em',
           marginTop: '1em',
           fontSize: '1.2em',
           fontWeight: '400',
           color: '#fff',
           '&:active': {
               backgroundColor: '#484848',
               border: '2px solid #fff'
           }
       }
      
        });

    
    const classes = useStyles();


    return (
        <>
        {formSubmitted.authorized && <Redirect to='/'/>}
        <div className={classes.home}>
            <div>{user}</div>
            <button onClick={() => setUser("Login")}>change</button>
            <Paper elevation={4} className={classes.paper}>
            <form className={classes.loginForm} onSubmit={(evt) => handleSubmit(evt)}>
                <Typography variant="h4">
                    Login
                </Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel>Email</InputLabel>
                    <Input
                    margin='dense'
                    required='true'
                    type='text'
                    color='primary'
                    fullWidth='true'
                    value={formSubmitted.email}
                    onChange={e => {
                        setFormSubmitted({...formSubmitted, email: e.target.value });
                    console.log("V1: ", e.target.value, "K: ", formSubmitted);
                    }}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel>Password</InputLabel>
                    <Input
                    className={classes.emailInput}
                    required='true'
                    margin='dense'
                    fullWidth='true'
                    type="password"
                    value={formSubmitted.password}
                    onChange={e => {
                        setFormSubmitted({...formSubmitted, password: e.target.value });
                    console.log("VALUE: ", e.target.value, "L: ", formSubmitted);}}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <Input
                    className={classes.submitInput}
                    // color="secondary"
                    type='submit'
                    value='Sign in'
                    onSubmit={e => handleSubmit(e)}
                    disableUnderline
                    >
                    </Input>
                </FormControl>
            </form>
            </Paper>
        </div>
        </>
    )
}

export default Login;
