import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    card: {},
    cardText: {},
    container: {
        margin: theme.spacing(1),
        inset: theme.spacing(0.5),
        color: theme.palette.colorScheme.color,
        backgroundColor: theme.palette.colorScheme.backgroundColor,
    },
    cardImage: {},
    cardImageTop: {}
}));