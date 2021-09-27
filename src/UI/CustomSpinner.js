import React from 'react';
import { Stack, CircularProgress } from '@mui/material';

const CustomSpinner = () => {
    return (
        <Stack sx={{ padding: '100px', justifyContent: 'center', display: 'flex', alignItems: 'center', color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress sx={{ color: '#e7ab3c' }} />
        </Stack>
    )
}

export default CustomSpinner;
