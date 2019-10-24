import { createStyles, makeStyles } from '@material-ui/core';

const styles = () => createStyles({
  tableWrapper: {
    maxHeight: '80vh',
    overflow: 'auto',
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
