import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface Theme {
        description: {
            fontStyle: string;
            fontSize: number;
            color: string;
        }
    }

    interface ThemeOptions {
        description?: {
            fontStyle?: string;
            fontSize?: number;
            color?: string;
        }
    }
}

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0066c3',
        },
        secondary: {
            main: '#a8a8a8',
        },
    },
    typography: {
        h1: {
            fontSize: 22,
        },
        h3: {
            color: grey[800],
            fontSize: 20,
            fontWeight: 700
        },
        subtitle1: {
            color: grey[800],
            fontSize: 16,
            fontWeight: 700,
        }
    },
    description: {
        color: grey[600],
        fontSize: 14,
        fontStyle: 'italic'
    },
})
