import { createTheme } from "@mui/material";

// TODO: use json to store data
export const themeWarm = () => {
    return createTheme({
        palette: {
            primary: {
                appbar: '#3D3B40',
                control: '#525CEB',
                details: '#BFCFE7',
                main: '#F8EDFF'
            },
        }
    })
}

export const themeChill = () => {
    return createTheme({
        palette: {
            primary: {
                appbar: '#0F2167',
                control: '#3559E0',
                details: '#4CB9E7',
                main: '#FFECD6'
            },
        }
    })
}

export const themeSoft = () => {
    return createTheme({
        palette: {
            primary: {
                appbar: '#39A7FF',
                control: '#87C4FF',
                details: '#E0F4FF',
                main: '#FFEED9'
            }
        }
    })
}