import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomSpinner from '../../UI/CustomSpinner';
import { createCommentAction, getListCommentAction, addComment } from './../../features/CommentSlice';

const Comment = ({ id, profile }) => {
    const { image } = profile;
    const comments = useSelector(state => state.comment.comments);
    const loading = useSelector(state => state.comment.loading);
    const dispatch = useDispatch();
    const [content, setContent] = useState('');

    useEffect(() => {
        dispatch(getListCommentAction(id));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.content.value) {
            let data = {
                productId: id,
                content: content,
                user_image: profile.image ? profile.image : '',
                userId: profile.id,
                user_name: `${profile.firstname} ${profile.lastname}`
            }
            dispatch(addComment(data));
            dispatch(createCommentAction(data));
            setContent('');
        }
    }

    const renderComment = (arr) => {
        return arr.slice(0).reverse().map((value, key) => {
            const { content, user_image, user_name } = value;
            return (
                <div className="comment_item" key={key}>
                    {user_image
                        ?
                        <img src={user_image} />
                        :
                        <img src="/images/avatar-default.jpg" />
                    }
                    <div>
                        <h6>{user_name}</h6>
                        <p>{content}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="comment my-3">
            <form className="comment_content" onSubmit={handleSubmit}>
                {!image
                    ?
                    <img src="/images/avatar-default.jpg" alt="image-current-user" />
                    :
                    <img src={image} alt="image-current-user" />
                }
                <input type="text" placeholder="Write comment here" name="content" value={content} onChange={(e) => setContent(e.target.value)} />
                <button className="btn-post" type="submit" >POST</button>
            </form>
            <div className="comment_list">
                {loading ? <CustomSpinner /> : renderComment(comments)}
            </div>
        </div>
    );
}

export default Comment;
