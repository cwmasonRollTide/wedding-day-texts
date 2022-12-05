import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    card: {},
    cardText: {},
    container: {
        backgroundColor: 'white',
        flexGrow: '1',
        overflow: 'auto',
        // minHeight: 'calc(100% + 30em)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(1),
        marginRight: theme.spacing(2),
        padding: theme.spacing(2),
        paddingRight: theme.spacing(3),
        bottom: '0',
        width: 'calc(100% - 5.5em)',
        marginLeft: theme.spacing(3),
        flex: '1 1 auto',
        alignSelf: 'stretch',
        height: 'calc(100% + 50em)',
        [theme.breakpoints.down("sm")]: {
            width: 'calc(100% - 4.5em)',
            marginLeft: theme.spacing(2)
        }
    },
    cardImage: {},
    cardImageTop: {}
}));
