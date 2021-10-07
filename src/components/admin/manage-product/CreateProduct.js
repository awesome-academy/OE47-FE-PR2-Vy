import React, { useState, useEffect } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FileBase64 from 'react-file-base64';
import CustomizedSnackbars from './../../alert/index';
import { useDispatch, useSelector } from 'react-redux';
import { textCapitalize } from '../../../ultils';
import { getBrands, getCategories, getSize } from '../../../features/ProductSlice';
import { handleCreateProduct } from '../../../features/ManageProductSlice';
import { handleUpdateProduct } from './../../../features/ManageProductSlice';
import { makeStyles } from '@material-ui/styles';
import { Modal, Backdrop, Fade, Box, TextField, Grid, InputLabel, MenuItem, FormControl, Select, ListItemIcon, ListItemText, Checkbox, Button } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const useStyles = makeStyles(theme => ({
    indeterminateColor: {
        color: "#e7ab3c"
    },
    selectAllText: {
        fontWeight: 500
    },
    selectedAll: {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)"
        }
    }
}));

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    },
    getContentAnchorEl: null,
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "center"
    },
    variant: "menu"
};

const CreateProduct = ({ productEdit, open, setOpen }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const categories = useSelector(state => state.products.categories);
    const brands = useSelector(state => state.products.brands);
    const size = useSelector(state => state.products.size);
    const [product, setProduct] = useState({});
    const [selectedSize, setSelectedSize] = useState([]);
    const [image, setImage] = useState([]);
    const [openAlert, setOpenAlert] = useState({
        open: false,
        text: '',
        severity: 'info'
    });

    const handleChangeMultiSelect = (event) => {
        const { value } = event.target;
        setSelectedSize(value);
    };

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getBrands());
        dispatch(getSize());
    }, []);

    useEffect(() => {
        if (productEdit) {
            const { image, size } = productEdit;
            setProduct(productEdit);
            setImage(image);
            setSelectedSize(size);
        }
    }, [productEdit]);

    const handleClose = () => {
        setOpen(false);
        setProduct({});
        setSelectedSize([]);
        setImage([]);
    }

    const renderSelect = (arr, label, keys) => {
        return (
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={product[keys]}
                    label="Age"
                    name={keys}
                    onChange={handleChangeSelected}
                >
                    {
                        arr.map((value, key) => {
                            return (
                                <MenuItem key={key} value={value.id}>
                                    {textCapitalize(value.name)}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        )
    }

    const renderMultipleSelect = (arr) => {
        return (
            <FormControl className={classes.formControl} fullWidth>
                <InputLabel id="mutiple-select-label">
                    Choose Size
                </InputLabel>
                <Select
                    labelId="mutiple-select-label"
                    multiple
                    value={selectedSize}
                    onChange={(e) => handleChangeMultiSelect(e)}
                    renderValue={(val) => val.join(", ")}
                    MenuProps={MenuProps}
                >
                    {arr.map((option, key) => (
                        <MenuItem key={key} value={option.name}>
                            <ListItemIcon>
                                <Checkbox checked={selectedSize.indexOf(option.name) > -1} />
                            </ListItemIcon>
                            <ListItemText primary={option.name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        )
    }

    const handleChangeSelected = (event) => {
        const { name, value } = event.target
        setProduct(prevState => ({ ...prevState, [name]: value }));
    };

    const getFiles = (e) => {
        return e.reduce((array, item) => {
            return [...array, item.base64]
        }, []);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            ...product,
            size: [...selectedSize],
            image: [...image]
        }
        if (!productEdit) {
            dispatch(handleCreateProduct(data))
        }
        else {
            dispatch(handleUpdateProduct(data))
        }
        handleClose();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        maxHeight: '700px',
        overflowY: 'scroll',
        transform: 'translate(-50%, -50%)',
        minWidth: 1000,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4
    };

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setProduct(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className="product-modal profile">
                        <div className="product-modal_icon">
                            <CloseOutlinedIcon className="close_icon" onClick={handleClose} />
                        </div>
                        <section className="">
                            <h6 className="mb-4">New Product </h6>
                            <div className="container">
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={4}>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                id="outlined-basic"
                                                type="text"
                                                name="name"
                                                value={product.name}
                                                label="Product name"
                                                variant="outlined"
                                                onChange={handleChangeInput}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                id="outlined-basic"
                                                type="number"
                                                label="Price"
                                                variant="outlined"
                                                name="price"
                                                value={product.price}
                                                onChange={handleChangeInput}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                id="outlined-basic"
                                                type="text"
                                                name="description"
                                                value={product.description}
                                                label="Description"
                                                variant="outlined"
                                                onChange={handleChangeInput}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                id="outlined-basic"
                                                type="number"
                                                label="Sale"
                                                variant="outlined"
                                                name="sale"
                                                value={product.sale}
                                                onChange={handleChangeInput}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                id="outlined-basic"
                                                type="text"
                                                label="Note"
                                                variant="outlined"
                                                name="note"
                                                value={product.note}
                                                onChange={handleChangeInput}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            {renderSelect(categories, "Choose Categories", "categoriesId")}
                                        </Grid>
                                        <Grid item xs={6}>
                                            {renderSelect(brands, "Choose Brands", "brandId")}
                                        </Grid>
                                        <Grid item xs={6}>
                                            {renderMultipleSelect(size, selectedSize)}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className="mb-4">
                                                <FileBase64
                                                    id="inputImage"
                                                    multiple={true}
                                                    onDone={(e) => setImage(getFiles(e))}
                                                />
                                            </div>
                                            <Grid container spacing={2} className="image_container">
                                                {
                                                    image && image.map((value, key) => {
                                                        return (
                                                            <Grid item xs={2}>
                                                                <img src={value} alt={`new product image ${key}`} />
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} className="delete-modal_btn-container text-center">
                                            <Button className="btn-cancel" onClick={() => setOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button className="btn-remove" type="submit">
                                                Create
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </div>
                        </section>
                    </Box>
                </Fade>
            </Modal>
            <CustomizedSnackbars
                message={openAlert.text}
                severity={openAlert.severity}
                open={openAlert.open}
                setOpen={setOpenAlert}
            />
        </>
    );
}

export default CreateProduct;
