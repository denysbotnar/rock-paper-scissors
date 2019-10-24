import { createStyles, makeStyles } from '@material-ui/core';

const styles = (theme) => createStyles({
  root: {
    height: '100%',
    position: 'relative',
  },
  container: {
    height: '100%',
    padding: theme.spacing(1),
  },
  progressBar: {
    position: 'absolute', top: 0, left: 0, width: '100%',
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    width: '50%',
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
