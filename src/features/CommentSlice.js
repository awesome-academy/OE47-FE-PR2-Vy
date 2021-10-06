import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createComment, getListComment } from './../api/comment';

export const getListCommentAction = createAsyncThunk('comment/getListComment', async (params) => {
    let res = await getListComment("comments", params);
    if (res && res.status == 200) {
        return res.data;
    }
});

export const createCommentAction = createAsyncThunk('comment/createComment', async (params) => {
    let res = await createComment("comments", params);
    if (res && res.status == 201) {
        return res.data;
    }
});

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        comments: [],
        loading: false,
        error: '',
        status: ''
    },
    reducers: {
        addComment: (state, action) => {
            let temp = [...state.comments, action.payload];
            state.comments = temp;
        }
    },
    extraReducers: {
        [getListCommentAction.pending]: (state) => {
            state.loading = true;
        },
        [getListCommentAction.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getListCommentAction.fulfilled]: (state, action) => {
            state.loading = false;
            state.comments = action.payload;
        },
        [createCommentAction.pending]: (state) => {
            state.loading = true;
        },
        [createCommentAction.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [createCommentAction.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload;
        }
    }
})
const { reducer, actions } = commentSlice;
export const {
    addComment
} = actions;
export default commentSlice.reducer;
