import {createTheme} from "@mui/material"
export const theme=createTheme(
    {
        palette: {
            primary:{
                main:'#1C6758',
                light:'#529c73'
            },
        },
        typography: {
            h1:{
                fontWeight:700,
                fontSize:25,
                lineHeight:'27px',

            },
            h2:{
                fontWeight:400,
                fontSize:18,

            }

        },

    })