import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      dark: '#000000',
      default: '#121212',
      light: '#212121',
    },
    primary: {
      main: '#ffd59b',
      light: '#ffd59b44',
      contrastText: '#121212',
    },
    secondary: {
      main: '#5cff81',
      light: '#5cff8111',
      contrastText: '#121212',
    },
    darkColors: {
      input: '#484848',
      label: '#848484',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        '&:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 100px #26679800 inset !important',
          transition:
                    'background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s',
        },
        '&:-webkit-autofill:focus': {
          WebkitBoxShadow: '0 0 0 100px #26679800 inset !important',
          transition:
                    'background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s',
        },
        '&:-webkit-autofill:hover': {
          WebkitBoxShadow: '0 0 0 100px #26679800 inset !important',
          transition:
                    'background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s',
        },
      },
    },
    MuiTypography: {
      h5: {
        fontWeight: 600,
        fontFamily:
          'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important',
      },
    },
    MuiButton: {
      root: {
        borderRadius: '4px',
        textTransform: 'initial',
      },
      contained: {
        boxShadow: 'none',
      },
    },
    MuiList: {
      root: {
        backgroundColor: '#000',
      },
    },
    MuiListItem: {
      '&:selected': {
        backgroundColor: 'transparent',
      },
    },
  },
});

export default theme;
