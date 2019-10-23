import { createStyles, makeStyles } from '@material-ui/core';

const styles = (theme) => createStyles({
  app: {
    textAlign: 'center',
    backgroundColor: 'lightgrey',
    minHeight: '100vh',
    padding: theme.spacing(3),
  },
  container: {
    minHeight: '100%',
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
