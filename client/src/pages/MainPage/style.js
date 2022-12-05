import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    App: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        // flex: 'auto',
        backgroundColor: 'lightgrey',
        justifyContent: 'stretch'
    }
}));