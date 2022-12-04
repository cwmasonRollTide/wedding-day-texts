import * as React from 'react';
import MainPage from "./pages/MainPage";
import { useTheme, ThemeProvider } from '@mui/material/styles';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const WeddingDayTexts = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <MainPage />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}


export default WeddingDayTexts;
