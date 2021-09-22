import _ from "lodash";

export const getTotalPage = (totalItem, limit) => {

    var whole = (totalItem - totalItem % limit) / limit;
    var totalPage;
    if ((totalItem % limit) === 0) {
        totalPage = whole;
    }
    else {
        totalPage = whole + 1;
    }
    return totalPage;
};

export const compare = (str) => {
    str = str.toLowerCase();

    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    str = str.replace(/([^0-9a-z-\s])/g, '');

    str = str.replace(/(\s+)/g, ' ');

    str = str.replace(/^-+/g, '');

    str = str.replace(/-+$/g, '');

    return str;
};

export const addToCart = (product) => {
    let cartItems = localStorage.getItem("cart");
    cartItems = JSON.parse(cartItems);
    if (cartItems) {
        if (cartItems[`products ${product.id}`] == undefined) {
            cartItems = {
                ...cartItems,
                [`products ${product.id}`]: { ...{ product }, count: 1 },
            };
        } else cartItems[`products ${product.id}`].count += 1;
    } else {
        cartItems = {
            [`products ${product.id}`]: { ...product, count: 1 },
        };
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
};


export const renderResultSearch = (arr, search) => {
    var result = [];
    arr && arr.map((item) => {
        if (compare(item.name).indexOf(compare(search)) !== -1) {
            result = [...result, item]
        }
    })
    return result;
};

export const getBrands = async (array, id) => {
    try {
        let result;
        let res = await array.map((value, key) => {
            if (value.id === id) {
                result = value.name
            }
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};
