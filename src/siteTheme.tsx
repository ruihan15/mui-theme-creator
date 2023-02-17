import { createTheme, ThemeOptions, Theme } from "@mui/material";

export const defaultThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#292F4C',
      light: '#545970',
      dark: '#1C2034',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFAD65',
      light: '#FFCC9F',
      dark: '#FF983E',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#666666',
      disabled: '#9E9E9E',
    },
    divider: '#E7EBF0',
    common: {
      black: '#1D1D1D',
      white: '#fff',
    },
    grey: {
      "50": "#F3F6F9",
      "100": "#E7EBF0",
      "200": "#E0E3E7",
      "300": "#CDD2D7",
      "400": "#B2BAC2",
      "500": "#A0AAB4",
      "600": "#6F7E8C",
      "700": "#3E5060",
      "800": "#2D3843",
      "900": "#1A2027",
      "A100": "#f5f5f5",
      "A200": "#eeeeee",
      "A400": "#bdbdbd",
      "A700": "#616161"    },
    error: {
      main: '#F44336',
      light: '#F88078',
      dark: '#E31B0C',
      contrastText: '#fff',
    },
    success: {
      main: '#4CAF50',
      light: '#7BC67E',
      dark: '#3B873E',
      contrastText: '#fff',
    },
    warning: {
      main: '#ED6C02',
      light: '#FFB547',
      dark: '#C77700',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      main: '#2196F3',
      light: '#64B6F7',
      dark: '#0B79D0',
      contrastText: '#fff',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: '#E7EBF0',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  breakpoints: {
    keys: [
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    unit: 'px',
  },
  shape: {
    borderRadius: 10,
    semiRound: 4,
  },
  typography: {
    h1: {
      fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
      fontWeight: 800,
      lineHeight: 1.1142857142857143,
      color: '#0A1929',
    },
    h2: {
      fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
      fontWeight: 800,
      lineHeight: 1.2222222222222223,
      color: '#132F4C',
    },
    h3: {
      fontSize: '2.25rem',
      lineHeight: 1.2222222222222223,
      letterSpacing: 0.2,
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.75rem',
      lineHeight: 1.5,
      letterSpacing: 0.2,
      fontWeight: 400,
    },
    h5: {
      fontSize: '1.5rem',
      lineHeight: 1.5,
      letterSpacing: 0.1,
      color: '#007FFF',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1.25rem',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    button: {
      fontWeight: 700,
      letterSpacing: 0,
      fontSize: '0.875rem',
      lineHeight: 1.75,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
}

export const defaultTheme: Theme = createTheme()

export const themeConfig: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  components: {
    MuiAccordion: {
      defaultProps: {
        square: true,
        TransitionProps: {
          unmountOnExit: true,
        },
      },
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, .125)",
          boxShadow: "none",
          transition: defaultTheme.transitions.create("margin-left"),
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: "auto",
          },
          "&.Mui-disabled": {
            marginLeft: 32
          }
        },
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255, 255, 255, .125)",
          minHeight: 56,
          "&.Mui-expanded": {
            minHeight: 56
          }
        },
        content: {
          alignItems: "center",
          justifyContent: "space-between",
          "&.Mui-expanded": {
            margin: "12px 0",
          },
        },
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: "#212121",
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        docked: {
          "& .MuiPaper-root": {
            position: "static",
          },
        },
        paper: {},
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "#121212",
        },
      }
    }
  }
}

export default createTheme(themeConfig)
