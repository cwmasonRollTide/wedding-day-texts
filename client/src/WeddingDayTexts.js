import * as React from 'react';
import {useEffect, useState} from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useTheme, ThemeProvider } from '@mui/material/styles';
import MessageDisplay from "./components/messagedisplay/messageDisplay";

// const s3Bucket = new S3Client(process?.env?.AWS_REGION ?? "us-east-1");

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const WeddingDayTexts = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [messages, setMessages] = useState([]);
    
    useEffect(async () => {
        // const messages = await s3Bucket.getMessages();
        //TODO: translate bucket response into same shape as what comes into incoming queue
        setMessages([]);
    }, [])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <div role="App">
                    <Header />
                    <MessageDisplay messages={messages} />
                    <Footer />
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default WeddingDayTexts;
