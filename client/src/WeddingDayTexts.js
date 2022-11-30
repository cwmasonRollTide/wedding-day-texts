import S3Client from "./api/s3client";
import {useEffect, useState} from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MessageList from "./components/messagelist/messagelist";
const s3Bucket = new S3Client(process?.env?.AWS_REGION ?? "us-east-1");
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useStyles} from "./style";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const WeddingDayTexts = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [messages, setMessages] = useState([]);
    
    useEffect(async () => {
        const messages = await s3Bucket.getMessages();
        //TODO: translate bucket response into same shape as what comes into incoming queue
        setMessages(messages);
    }, [])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <div role="App">
                    <Header />
                    <MessageList messages={messages} />
                    <Footer />
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default WeddingDayTexts;
