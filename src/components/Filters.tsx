import React from 'react';
import { Box, Button, TextField, Menu, MenuItem, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';

const FilterButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(0.5),
    backgroundColor: '#f4f4f4',
    color: '#000',
    '&:hover': {
        backgroundColor: '#e0e0e0',
    },
}));

const Filters: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box display="flex" alignItems="center">
            <Box display="flex">
                <FilterButton variant="contained" onClick={handleClick}>
                    Роль
                </FilterButton>
                <FilterButton variant="contained" onClick={handleClick}>
                    Гео
                </FilterButton>
                <FilterButton variant="contained" onClick={handleClick}>
                    Отлежка
                </FilterButton>
                <FilterButton variant="contained" onClick={handleClick}>
                    Спамблок
                </FilterButton>
                <FilterButton variant="contained" onClick={handleClick}>
                    Папка
                </FilterButton>
                <IconButton onClick={handleClick} color="primary">
                    <AddIcon />
                </IconButton>
            </Box>
            <TextField
                variant="outlined"
                placeholder="Поиск..."
                size="small"
                sx={{ marginLeft: 'auto', width: '200px' }}
            />
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
            </Menu>
        </Box>
    );
};

export default Filters;
