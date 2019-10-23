import React from 'react';
// import './App.css';
import { Paper, Grid } from '@material-ui/core';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <Grid container className={classes.app} justify="center">
      <Grid item xs={12} sm={9}>
        <Paper className={classes.container} />
      </Grid>
    </Grid>
  );
}

export default App;
