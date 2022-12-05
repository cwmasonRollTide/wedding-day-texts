import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    card: {},
    cardText: {},
    container: {
        backgroundColor: 'white',
        flexGrow: 'auto',
        flexWrap: 'wrap',
        height: '100%',
        overflow: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(1),
        marginRight: theme.spacing(2),
        padding: theme.spacing(2),
        paddingRight: theme.spacing(3),
        bottom: '0',
        width: 'calc(100% - 5.5em)',
        marginLeft: theme.spacing(3),
        flex: 'auto',
        alignSelf: 'stretch',
        [theme.breakpoints.down("md")]: {
            width: 'calc(100% - 5em)',
            marginLeft: theme.spacing(2),
            // height: '39.75em'
        },
        [theme.breakpoints.down("sm")]: {
            width: 'calc(100% - 4.5em)',
            marginLeft: theme.spacing(2),
            // height: '39.75em'
        }
    },
    cardImage: {},
    cardImageTop: {}
}));
