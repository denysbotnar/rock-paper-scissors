import React from 'react';
// import './App.css';
import { Paper, Grid } from '@material-ui/core';
import useStyles from './styles';
import GameOptions from './components/GameOptions';
import Playground from './components/Playground';
import GameHistory from './components/GameHistory';
import useHistories from './hooks/useHistory';
import useCreateHistory from './hooks/useCreateHistory';

const gameTypes = {
  player: 'Player vs Computer',
  ai: 'Computer vs Computer',
};

function App() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(Object.keys(gameTypes)[0]);
  const [createHistory, createPending] = useCreateHistory();
  const [histories] = useHistories(createPending);

  const handleGameEnd = (history) => {
    createHistory(history);
  };

  return (
    <Grid container className={classes.app} justify="center">
      <Grid item xs={12} sm={9}>
        <Paper className={classes.container}>
          <Grid container spacing={5} direction="column" style={{ height: '100%' }} wrap="nowrap">
            <Grid item>
              <GameOptions
                selected={selected}
                onOptionChange={({ target: { value } }) => setSelected(value)}
                gameTypes={gameTypes}
              />
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
              <Grid container spacing={2} style={{ height: '100%' }}>
                <Grid item xs={12} md={8}>
                  <Playground mode={selected} onGameEnd={handleGameEnd} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <GameHistory histories={histories} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
