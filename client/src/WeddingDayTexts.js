import * as React from 'react';
import MasonMainPage from "./pages/MasonMainPage";
import { useTheme, ThemeProvider } from '@mui/material/styles';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const WeddingDayTexts = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <MasonMainPage />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}


export default WeddingDayTexts;
