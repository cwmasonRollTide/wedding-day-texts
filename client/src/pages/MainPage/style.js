import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    App: {
        // width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        flex: 2,
        backgroundColor: 'lightgrey',
        justifyContent: 'space-between'
    }
}));