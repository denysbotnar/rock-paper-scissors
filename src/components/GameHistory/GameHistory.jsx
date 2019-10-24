import React from 'react';
import {
  Table, TableRow, TableHead, TableCell, Paper, TableBody,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './styles';

const tableEntries = {
  created_at: 'Date',
  type: 'Type',
  winner: 'Winner',
};

export default function GameHistory({ histories }) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.tableWrapper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {Object.entries(tableEntries).map(([key, label]) => (
              <TableCell key={key}>
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {histories.map((game) => (
            <TableRow key={game.id}>
              {Object.keys(tableEntries).map((key) => {
                if (key === 'created_at') {
                  return (
                    <TableCell key={key}>
                      {new Date(`${game[key]} UTC`).toLocaleString()}
                    </TableCell>
                  );
                }
                return (
                  <TableCell key={key}>
                    {game[key]}
                  </TableCell>
                );
              }) }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
GameHistory.propTypes = {
  histories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    winner: PropTypes.string.isRequired,
    created_at: PropTypes.isRequired,
  })).isRequired,
};
