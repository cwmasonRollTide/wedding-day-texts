import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    App: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap'
    }
}));