import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        _page: 1,
        _limit: 9,
        filtersApplied: {}
    },
    reducers: {
        handleChagePage: (state, action) => {
            state._page = action.payload;
        },
        handleSortPrice: (state, action) => {
            switch (action.payload) {
                case "instant_search":
                    delete state._order;
                    delete state._sort;
                    break;
                case "asc":
                    state._sort = "price";
                    state._order = action.payload;
                    break;
                case "desc":
                    state._sort = "price";
                    state._order = action.payload;
                    break;
                default:
                    break;
            }
            state._page = 1;
        },
        handleChangeEntriesPerPage: (state, action) => {
            state._limit = action.payload;
            state._page = 1;
        },
        handleFilterCategories: (state, action) => {
            action.payload.length === 0 ?
                delete state.filtersApplied.categoriesId
                :
                state.filtersApplied.categoriesId = action.payload;
            state._page = 1;
        },
        handleFilterByTags: (state, action) => {
            action.payload.length === 0 ?
                delete state.filtersApplied.tagId_like
                :
                state.filtersApplied.tagId_like = action.payload;
            state._page = 1;
        },
        handleFilterBrand: (state, action) => {
            action.payload.length === 0 ?
                delete state.filtersApplied.brandId
                :
                state.filtersApplied.brandId = action.payload;
            state._page = 1;
        },
        handlerFilterByPrice: (state, action) => {
            delete state.filtersApplied.price_lte;
            delete state.filtersApplied.price_gte;
            action.payload.price_lte && (state.filtersApplied.price_lte = action.payload.price_lte);
            action.payload.price_gte && (state.filtersApplied.price_gte = action.payload.price_gte);
            state._page = 1;
        },
        handleFilterBySize: (state, action) => {
            action.payload.length === 0 ?
                delete state.filtersApplied["size_sizeId_like"]
                : state.filtersApplied["size_sizeId_like"] = action.payload
            state._page = 1;
        },
        clearAllFilter: state => {
            state.filtersApplied = {};
            state._page = 1;
            state._limit = 9;
        }
    }
})

const { reducer, actions } = filterSlice;
export const {
    handleChagePage,
    handleSortPrice,
    handleChangeEntriesPerPage,
    handleFilterCategories,
    handleFilterByTags,
    handleFilterBrand,
    handlerFilterByPrice,
    handleFilterBySize,
    clearAllFilter
} = actions

export default filterSlice.reducer;
