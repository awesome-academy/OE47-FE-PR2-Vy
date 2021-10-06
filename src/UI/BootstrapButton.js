import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
    borderColor: '#e7ab3c',
    color: '#e7ab3c',
    outline: 'none',
    '&:hover': {
        backgroundColor: '#e7ab3c',
        borderColor: '#e7ab3c',
        color: '#ffffff',
        boxShadow: 'none',
        outline: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#e7ab3c',
        color: '#ffffff',
        outline: 'none',
    },
    '&:focus': {
        boxShadow: 'none',
        outline: 'none',
    }
});
