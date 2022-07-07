import {createTheme} from '@mui/material/styles';

const FONT_PRIMARY = "KeepCalm"; // Google Font

// /* Sunset Sky: e93100
// Sunset Cloud dark: bf0000
// Sunset Cloud bright: ff9000
//
// Dark BG/Stone: 14161f
// Outline Dark Stone: 45064b
// Outline Light Stone: 611381 */


export const theme = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                sx: {borderRadius: 0, borderColor: '#000', borderWidth: 1}
            }
        },
    },
    palette: {
        primary: {
            main: "#ed1f24"
        },
        secondary: {
            main: "#001051"
        },
        error: {
            main: "#FF5959"
        },
        background: {
          default: '#14161f',
          paper: '#14161f'
        },
    },
    typography: {
        h1: {
            fontSize: 42,
            fontWeight: 200,
            fontFamily: 'Exo'
        },
        h2: {
            fontSize: 28,
            fontWeight: 200,
            fontFamily: 'Exo'
        },
        h3: {
            fontSize: 22,
            fontWeight: 200,
            fontFamily: 'Exo'
        },
        h4: {
            fontSize: 18,
            fontWeight: 200,
            fontFamily: 'Exo'
        },
        h5: {
            fontSize: 14,
            fontWeight: 200,
            fontFamily: 'Exo'
        },
        h6: {
            fontSize: 12,
            fontWeight: 200
        },
        body1: {
            fontSize: 16,
            fontFamily: 'Exo'
        },
        body2: {
            fontSize: 12
        },
        caption: {
            fontSize: 10
        },
        button: {
            fontSize: 12,
            textTransform: 'inherit'
        }
    }
});


export const Custom = {
    grey: '#828282',
    batBlue: "#0048ff",
    batPurple: "#7500a1",
    vaderLightPink: "#fec9fe",
    vaderPink: "#ff9ddb",
    vaderDarkPink: "#ff00ba",
    vaderOtherPink: "#ff65ac",
    vaderYellow: "#ffbf00"
}
