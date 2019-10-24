import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Grid, Button, Paper, Typography, LinearProgress, RadioGroup, FormControlLabel, Radio,
} from '@material-ui/core';
import useStyles from './styles';
import rockImg from '../../assets/rock.png';
import paperImg from '../../assets/paper.png';
import scissorImg from '../../assets/scissor.png';

const gameItems = ['rock', 'paper', 'scissor'];

const getWinner = (...choices) => {
  // first element in each array is winner in pair
  const winnerPairs = [['paper', 'rock'], ['scissor', 'paper'], ['rock', 'scissor']];
  const [winner] = winnerPairs.find(
    (pair) => pair.every((item) => choices.includes(item)),
  ) || [];

  return winner;
};

const getRandomIndex = () => Math.floor(Math.random() * 3);
const GAME_DELAY_MS = 1000;
const images = {
  rock: rockImg,
  paper: paperImg,
  scissor: scissorImg,
};

export default function Playground({ mode }) {
  const classes = useStyles();
  const [player1, setPlayer1] = useState(gameItems[getRandomIndex()]);
  const [player2, setPlayer2] = useState(gameItems[getRandomIndex()]);
  const [gamePending, setGamePending] = useState(false);

  useEffect(() => {
    if (gamePending) {
      const timeout = setTimeout(() => {
        if (mode === 'ai') {
          setPlayer1(gameItems[getRandomIndex()]);
        }
        setPlayer2(gameItems[getRandomIndex()]);
        setGamePending(false);
      }, GAME_DELAY_MS);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [gamePending, mode]);

  const handleStartGame = () => {
    setGamePending(true);
  };
  return (
    <Paper elevation={3} className={classes.root}>
      {gamePending && (<LinearProgress className={classes.progressBar} />)}
      <Grid container direction="column" className={classes.container}>
        <Grid item style={{ flexGrow: 1 }}>
          <Grid container style={{ height: '100%' }}>
            <Grid item xs={12} sm={6}>
              <Grid container direction="column" alignItems="center" spacing={1} style={{ height: '100%' }}>
                <Grid item>
                  <Typography variant="h6">
                    Player 1 -
                    {' '}
                    {mode === 'ai' ? 'AI' : 'Human'}
                  </Typography>
                </Grid>
                <Grid item>
                  <img width={150} height={150} src={images[player1]} alt={player1} />
                </Grid>
                <Grid item style={{ flexGrow: 1 }}>
                  <Typography>
                    Choose action
                    {' '}
                    <b>{player1}</b>
                  </Typography>
                  {mode === 'player' && (
                  <RadioGroup row aria-label="gameItem" name="gameItem" value={player1} onChange={({ target: { value } }) => setPlayer1(value)}>
                    {gameItems.map((gameItem) => (
                      <FormControlLabel key={gameItem} value={gameItem} label={gameItem.toLocaleUpperCase()} control={<Radio />} />
                    ))}
                  </RadioGroup>
                  )}

                  <Typography variant="h6">{getWinner(player1, player2) === player1 && 'WIN!!!'}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="h6">Player 2 - AI</Typography>
                </Grid>
                <Grid item>
                  <img width={150} height={150} src={images[player2]} alt={player2} />
                </Grid>
                <Grid item style={{ flexGrow: 1 }}>
                Choose action
                  {' '}
                  <b>{player2}</b>
                  <Typography variant="h6">{getWinner(player1, player2) === player2 && 'WIN!!!'}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" disabled={gamePending} onClick={handleStartGame}>
            Play
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

Playground.propTypes = {
  mode: PropTypes.oneOf(['ai', 'player']).isRequired,
};
