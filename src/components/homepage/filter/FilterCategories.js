import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFilterCategories } from '../../../features/FilterSlice';
import { renderResultSearch } from '../../../ultils';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const FilterCategories = (props) => {

    const [categoriesState, setCategories] = useState([]);
    const [search, setSearch] = useState("");

    const categories = useSelector(state => state.products.categories);
    const dispatch = useDispatch();

    const filterCategories = (value) => {

        let temp = [...categoriesState];
        if (!(temp.some(val => val === value))) {
            temp = [...temp, value];
            setCategories(temp);
            dispatch(handleFilterCategories(temp));
        }
        else {
            temp = temp.filter(val => val !== value);
            setCategories(temp);
            dispatch(handleFilterCategories(temp));
        }
    }

    const renderCategories = (arr) => {
        return arr.map((value, key) => {
            return (
                <ListItem disablePadding onClick={() => filterCategories(value.id)}>
                    <ListItemButton>
                        {(categoriesState.some(val => val === value.id))
                            ?
                            <ListItemIcon>
                                <CloseIcon />
                            </ListItemIcon> : null
                        } <ListItemText size="small" primary={value.name} />
                    </ListItemButton>
                </ListItem>
            )
        });
    }

    return (
        <div className="filter-widget">
            <h4 className="fw-title">Categories</h4>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Search Categories" variant="standard" onChange={e => setSearch(e.target.value)} />
            </Box>
            {renderResultSearch(categories, search).length > 0 ? <ul className="filter-catagories">
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <List>
                        {
                            renderCategories(renderResultSearch(categories, search).slice(0, 5))
                        }
                    </List>
                </Box>
            </ul> : <p>No categories match.</p>}
        </div>
    );

}

export default FilterCategories;
