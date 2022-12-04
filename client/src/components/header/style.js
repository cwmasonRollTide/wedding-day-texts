import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
     MasonWeddingHeader: {
         flexShrink: '0',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         margin: theme.spacing(0),
         inset: theme.spacing(0),
         width: '100%'
    },
    logo: {
         width: '100%',
         height: '100%',
         alignSelf: 'center'
    }
}));