import { createStyles, makeStyles } from '@material-ui/core';

const styles = (theme) => createStyles({
  app: {
    textAlign: 'center',
    backgroundColor: 'lightgrey',
    height: '100vh',
    padding: theme.spacing(3),
  },
  container: {
    height: '97%',
    padding: theme.spacing(2),
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
