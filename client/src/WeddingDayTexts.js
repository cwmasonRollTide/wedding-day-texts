import * as React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useTheme, ThemeProvider } from '@mui/material/styles';
import MessageDisplay from "./components/messagedisplay/messageDisplay";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const WeddingDayTexts = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <div role="App">
                    {/*<h1>WEDDING DAY TEXTS COMING SOON</h1>*/}
                    {/*<image media={}*/}
                    <Header />
                    <MessageDisplay />
                    <Footer />
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}


export default WeddingDayTexts;
