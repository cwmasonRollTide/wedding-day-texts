import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    MasonDayFooter: {
        margin: theme.spacing(1),
        backgroundColor: theme?.palette?.colorScheme?.backdropGrayscale ?? 'gray'
    }
}));