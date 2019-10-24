import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Grid, Button, Paper, Typography, LinearProgress, RadioGroup, FormControlLabel, Radio,
} from '@material-ui/core';
import useStyles from './styles';
import rockImg from '../../assets/rock.png';
import paperImg from '../../assets/paper.png';
import scissorImg from '../../assets/scissor.png';
import nothingImg from '../../assets/nothing.png';

const gameItems = ['rock', 'paper', 'scissor'];

const getWinner = (...choices) => {
  // first element in each array is winner in pair
  const winnerPairs = [['paper', 'rock'], ['scissor', 'paper'], ['rock', 'scissor']];
  const [winner] = winnerPairs.find(
    (pair) => pair.every((item) => choices.includes(item)),
  ) || [];

  return winner;
};

const getWinnerName = (p1, p2) => {
  const winner = getWinner(p1, p2);
  if (winner === p1) {
    return 'player1';
  } if (winner === p2) {
    return 'player2';
  }
  return 'nobody';
};

const getRandomIndex = () => Math.floor(Math.random() * 3);
const GAME_DELAY_MS = 1000;
const images = {
  rock: rockImg,
  paper: paperImg,
  scissor: scissorImg,
};

export default function Playground({ mode, onGameEnd }) {
  const classes = useStyles();
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [gamePending, setGamePending] = useState(false);
  const winnerChoice = getWinner(player1, player2);
  const [winnerName, setWinnerName] = useState(null);

  useEffect(() => {
    if (gamePending) {
      const timeout = setTimeout(() => {
        const p1Choice = player1 || gameItems[getRandomIndex()];
        const p2Choice = gameItems[getRandomIndex()];
        if (mode === 'ai') {
          setPlayer1(p1Choice);
        }
        setPlayer2(p2Choice);
        setGamePending(false);
        onGameEnd({ type: mode, winner: getWinnerName(p1Choice, p2Choice) });
        setWinnerName(getWinnerName(p1Choice, p2Choice));
      }, GAME_DELAY_MS);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [gamePending, mode, onGameEnd, player2, player1, winnerChoice]);

  useEffect(() => {
    setPlayer1(null);
    setPlayer2(null);
    setWinnerName(null);
  }, [mode]);

  const handleStartGame = () => {
    if (mode === 'player' && player1 === null) {
      return;
    }
    setGamePending(true);
  };

  const handleChangeAction = ({ target: { value } }) => {
    setPlayer1(value);
    setWinnerName(null);
    setPlayer2(null);
  };
  return (
    <Paper elevation={3} className={classes.root}>
      {gamePending && (<LinearProgress className={classes.progressBar} />)}
      <Grid container direction="column" className={classes.container}>
        <Grid item style={{ flexGrow: 1 }}>
          <Grid container style={{ height: '100%' }}>
            <Grid item xs={12} sm={6}>
              <Grid container alignItems="center" justify="center" spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    Player 1 -
                    {' '}
                    {mode === 'ai' ? 'AI' : 'Human'}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <img width={150} height={150} src={images[player1] || nothingImg} alt={player1} />
                </Grid>
                <Grid item>
                  <Typography>
                    <b>{player1}</b>
                  </Typography>
                  {mode === 'player' && (
                  <RadioGroup aria-label="gameItem" name="gameItem" value={player1 || ''} onChange={handleChangeAction}>
                    {gameItems.map((gameItem) => (
                      <FormControlLabel
                        key={gameItem}
                        value={gameItem}
                        label={gameItem.toLocaleUpperCase()}
                        control={<Radio />}
                      />
                    ))}
                  </RadioGroup>
                  )}

                  <Typography color="secondary" variant="h5">{winnerName === 'player1' && 'WIN!!!'}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="h6">Player 2 - AI</Typography>
                </Grid>
                <Grid item>
                  <img width={150} height={150} src={images[player2] || nothingImg} alt={player2} />
                </Grid>
                <Grid item style={{ flexGrow: 1 }}>
                  <b>{player2}</b>
                  <Typography color="secondary" variant="h5">{winnerName === 'player2' && 'WIN!!!'}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" className={classes.button} disabled={gamePending} onClick={handleStartGame}>
            Play
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

Playground.propTypes = {
  mode: PropTypes.oneOf(['ai', 'player']).isRequired,
  onGameEnd: PropTypes.func.isRequired,
};
