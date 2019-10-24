import React from 'react';
import {
  Table, TableRow, TableHead, TableCell, Paper, TableBody,
} from '@material-ui/core';

const tableEntries = {
  date: 'Date',
  type: 'Type',
  winner: 'Winner',
};

const historyMock = [
  {
    id: 1, date: new Date().toDateString(), type: 'AI vs Player', winner: 'AI',
  },
  {
    id: 2, date: new Date().toDateString(), type: 'AI vs Player', winner: 'AI',
  },
  {
    id: 3, date: new Date().toDateString(), type: 'AI vs Player', winner: 'Player',
  },
  {
    id: 4, date: new Date().toDateString(), type: 'AI vs Player', winner: 'Player',
  },
  {
    id: 5, date: new Date().toDateString(), type: 'AI vs AI', winner: 'AI',
  },
  {
    id: 6, date: new Date().toDateString(), type: 'AI vs Player', winner: 'Player',
  },
  {
    id: 7, date: new Date().toDateString(), type: 'AI vs Player', winner: 'Player',
  },
];

export default function GameHistory() {
  return (
    <Paper elevation={3}>
      <Table>
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
          {historyMock.map((game) => (
            <TableRow key={game.id}>
              {Object.keys(tableEntries).map((key) => (
                <TableCell key={key}>
                  {game[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
