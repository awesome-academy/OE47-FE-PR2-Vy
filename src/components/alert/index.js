import * as React from 'react';

import Stack from '@mui/material/Stack';
import { Snackbar, Alert } from '@mui/material';

const CustomizedSnackbars = (props) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        props.setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={props.severity} sx={{ width: '100%' }}>
                    {props.message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}
export default CustomizedSnackbars;
