import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    submitButton: Palette['primary'];
  }
  interface PaletteOptions {
    submitButton?: PaletteOptions['primary'];
  }
}

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
      dark: '#283593',
    },
    submitButton: {
      main: '#000000',
      dark: '#000000',
    },
    text: {
      primary: '#334155',
    }
  },
  typography: {
    button: {
      textTransform: 'none',
      border: '1px solid',
      borderColor: '#D1D5DB',
      marginBottom: '10px'
    },
    fontFamily: [
      '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'
    ].join(','),
    fontSize: 12,
    h3: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(209, 213, 219)"
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid rgb(107 114 128)"
          },
          "& .input-error + .MuiOutlinedInput-notchedOutline": {
            border: "1px solid rgb(252 165 165)"
          },
          "&.Mui-focused .input-error + .MuiOutlinedInput-notchedOutline": {
            border: "1px solid rgb(239 68 68) !important"
          }
        }
      },
    }
  }
};

export default lightThemeOptions;