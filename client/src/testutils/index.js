import React from 'react';
import {render} from "@testing-library/react";
import {ThemeProvider} from "@mui/material/styles";
const mockTheme = {
    shadows: Array(10000).fill('test'),
    palette: {
        colorScheme: {
            backdropGrayscale: 'test'
        },
        text: {
            secondary: 'black'
        },
        backGround: {
            paper: 'white',
            color: 'test'
        },
        action: {
            focus: jest.fn()
        },
        gray: Array(10000).fill('test'),
        grey: Array(10000).fill('test')
    },
    typography: {
        fontFamily: 'none',
        fontWeightMedium: 'bold',
        pxToRem: jest.fn()
    },
    vars: {
        palette: {
            colorScheme: {
                backdropGrayscale: 'test'
            },
            text: {
                secondary: 'black'
            },
            backGround: {
                paper: 'white',
                color: 'test'
            },
            action: {
                focus: jest.fn()
            },
            primary: {
                mainChannel: '1'
            },
            AppBar: {
                darkBg: ''
            }
        },
        zIndex: {
            appBar: 1
        }
    }
};

const TestUtils = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            {props.children}
        </ThemeProvider>
    );
};

export const customRender = (ui) => {
    return render(
        <TestUtils theme={mockTheme}>
            {ui}
        </TestUtils>
    );
};
