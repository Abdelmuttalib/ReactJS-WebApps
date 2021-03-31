import React from 'react';
import { useState } from 'react';
import { Grid, TextField, Input, FormControl } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('Search...')


    const useStyles = makeStyles((theme) => ({
        
        container: {
            width: '150px'
        },

        icon: {
            width: '20px',
            height: '20px',
            color: '#000000'
        },
        textField: {
            width: '80px',
            height: '19px',
            fontFamily: 'Inter',
            fontWeight: '400',
            fontSize: '16px',
            border: 'none'
        }
    }));
    
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Searched Value: ", searchValue);
    };

    return (
        <Grid className={classes.container} container spacing={1}>
            <Grid item>
                <SearchIcon className={classes.icon} />
            </Grid>
            <Grid item className={classes.itemone}>
                <form onSubmit={(e) => handleSubmit(e)}>
                <FormControl>
                    <Input className={classes.textField} placeholder='Search...' type='text' onChange={e => {
                        setSearchValue(e.target.value);
                    }}/>
                </FormControl>
                </form>
            </Grid>
        </Grid>
    )
}

export default SearchBar;
