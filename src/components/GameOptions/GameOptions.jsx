import React from 'react';
import {
  AppBar, Toolbar, Typography, RadioGroup, FormControlLabel, Radio, Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';

export default function GameOptions({ selected, onOptionChange, gameTypes }) {
  return (
    <AppBar position="static" style={{ width: '100%' }}>
      <Toolbar color="secondary">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6"> Please choose game type</Typography>
          </Grid>
          <Grid item>
            <RadioGroup row aria-label="game-type" name="gameType" value={selected} onChange={onOptionChange}>
              {Object.entries(gameTypes).map(([key, label]) => (
                <FormControlLabel key={key} value={key} label={label} control={<Radio />} />
              ))}
            </RadioGroup>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

GameOptions.propTypes = {
  selected: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired,
  gameTypes: PropTypes.shape({
    [PropTypes.string]: PropTypes.string,
  }).isRequired,
};
