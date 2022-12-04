import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    card: {},
    cardText: {},
    container: {
        margin: theme.spacing(1),
        inset: theme.spacing(0.5),
        backgroundColor: 'white',
        flexGrow: '1',
        overflow: 'auto',
        minHeight: '2em',
    },
    cardImage: {},
    cardImageTop: {}
}));