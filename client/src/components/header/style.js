import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
     MasonWeddingHeader: {
         minHeight: '21vmin',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center', 
         palette: {
             background: {
                paper: 'white',
                 color: 'purple'
             }
         },
         backgroundColor: 'purple',
         color: 'white'
    }
}));