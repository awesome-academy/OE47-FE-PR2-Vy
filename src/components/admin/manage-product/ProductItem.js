import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleDeleteProduct } from '../../../features/ManageProductSlice';
import { BootstrapButton } from '../../../UI/BootstrapButton';
import DeleteModal from './../../homepage/DeleteModal';
import CreateProduct from './CreateProduct';

const ProductItem = ({ product, stt }) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openCreateNewProductModal, setOpenCreateNewProductModal] = useState();
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(handleDeleteProduct(product.id));
        setOpenCreateNewProductModal(false);
    }

    return (
        <>
            <tr key={stt}>
                <td className="cart-id">
                    {stt}
                </td>
                <td className="cart-title first-row">
                    {product.name}
                </td>
                <td className="cart-title first-row">
                    {product.price}
                </td>
                <td className="p-price first-row">
                    <BootstrapButton className="me-2" onClick={() => setOpenCreateNewProductModal(true)}>Edit</BootstrapButton>
                    <BootstrapButton onClick={() => setOpenDeleteModal(true)} >Delete</BootstrapButton>
                </td>
            </tr>
            <DeleteModal
                open={openDeleteModal}
                setOpen={setOpenDeleteModal}
                deleteItem={() => handleDelete()}
            />
            <CreateProduct
                open={openCreateNewProductModal}
                setOpen={setOpenCreateNewProductModal}
                productEdit={product}
            />
        </>
    );
}

export default ProductItem;
