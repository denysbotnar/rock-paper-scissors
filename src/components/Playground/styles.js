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
});

const useStyles = makeStyles(styles);

export default useStyles;
