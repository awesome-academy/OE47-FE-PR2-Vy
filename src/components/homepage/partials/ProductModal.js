import React, { useEffect, useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { getBrands } from '../../../ultils';


const ProductModal = (props) => {

    const [temp, setTemp] = useState();

    const { product } = props;

    const getBrandName = () => {
        let res = getBrands(brands, product.brandId);
        return res;
    }

    const brands = useSelector(state => state.products.brands);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 700,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const handleClose = () => props.setOpen(false);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props.open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.open}>
                <Box sx={style}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <img src={product.image} alt={`Image - ${product.name}`} />
                        </Grid>
                        <Grid item xs={8}>
                            <p>{product.name}</p>
                            <p>{product.desription}</p>
                            <p>{getBrandName()}</p>
                        </Grid>
                        <Grid item xs={4}>

                        </Grid>
                        <Grid item xs={8}>

                        </Grid>
                    </Grid>
                </Box>
            </Fade>
        </Modal>
    );

}

export default ProductModal;