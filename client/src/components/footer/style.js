import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    MasonDayFooter: {
        flexShrink: '0',
        alignItems: 'center',
        // margin: theme.spacing(1),
        // marginRight: theme.spacing(2),
        // padding: theme.spacing(2),
        // paddingRight: theme.spacing(3),
        position: 'fixed',
        bottom: '0',
        width: 'calc(100% - 64px)',
        [theme.breakpoints.down("sm")]: {
            width: 'calc(100% - 3em)',
            marginLeft: theme.spacing(0),
            // minHeight: '40em'
        }
    },
    link: {
        color: 'white'
    },
    logo: {
        width: '100%',
        height: '100%',
        alignSelf: 'center'
    }
}));