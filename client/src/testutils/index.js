import React from 'react';
import {render} from "@testing-library/react";
import {ThemeProvider} from "@mui/material/styles";
const mockTheme = {
    transitions: {
        create: jest.fn(),
        duration: {
            short: '1',
            medium: '2',
            long: '3'
        }
    },
    spacing: jest.fn(),
    breakpoints: {
        up: jest.fn()
    },
    mixins: {
        toolbar: ''
    },
    shadows: Array(10000).fill('test'),
    palette: {
        colorScheme: {
            backdropGrayscale: 'test',
            color: 'test'
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
    shape: {
        borderRadius: '1'
    },
    typography: {
        fontFamily: 'none',
        fontWeightMedium: 'bold',
        pxToRem: jest.fn()
    },
    vars: {
        palette: {
            colorScheme: {
                backdropGrayscale: 'test',
                color: 'test'
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
        shape: {
            borderRadius: '1'
        },
        zIndex: {
            appBar: 1
        }
    }
};

export const TestUtils = (props) => {
    return (
        <ThemeProvider theme={props.theme ?? mockTheme}>
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
