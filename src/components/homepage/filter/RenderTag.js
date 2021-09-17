import _ from 'lodash';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFilterByTags } from '../../../features/FilterSlice';

const RenderTag = () => {

    const [tagsState, settags] = useState([]);

    const tags = useSelector(state => state.products.tags);
    const dispatch = useDispatch();

    const filterTag = (value) => {
        let temp;
        temp = [...tagsState];
        if (!(temp.some(val => val === value))) {
            temp = [...temp, value];
            settags(temp);
            dispatch(handleFilterByTags(temp));
        }
        else {
            temp = temp.filter(val => val !== value);
            settags(temp);
            dispatch(handleFilterByTags(temp));
        }
    }

    const renderTags = (arr) => {
        return arr && arr.map((value, key) => {
            return (
                <a className={tagsState.some(val => val == value.id) ? "tags-active tags-item" : "tags-item"}
                    onClick={() => filterTag(value.id)} key={key}>{value.name}
                </a>
            )
        });
    }

    return (
        <div className="filter-widget">
            <h4 className="fw-title">Tags</h4>
            <div className="fw-tags">
                {renderTags(tags)}
            </div>
        </div>
    );

}

export default RenderTag;