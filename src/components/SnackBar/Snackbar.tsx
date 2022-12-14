import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
interface CustomizedSnackbarsProps{
    Open:boolean,
    /*setOpen:boolean*/
}
export default function CustomizedSnackbars({Open,/*setOpen*/}:CustomizedSnackbarsProps) {

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        /*setOpen(false);*/
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={Open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
            <Alert severity="success">This is a success message!</Alert>
        </Stack>
    );
}