import React, { useState } from 'react';
import {
    Fab,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Input,
    InputLabel, Box, FormControl
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import axios from "axios";

const StyledFab = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
}));

const FloatingActionButton: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [selectedFile1, setSelectedFile1] = useState<File | null>(null);
    const [selectedFile2, setSelectedFile2] = useState<File | null>(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFileChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile1(event.target.files[0]);
        }
    };

    const handleFileChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile2(event.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        if (!selectedFile1 || !selectedFile2) {
            alert('Please select both files.');
            return;
        }

        setOpen(false);

        const formData = new FormData();
        formData.append('file1', selectedFile1);
        formData.append('file2', selectedFile2);

        console.log(selectedFile1, selectedFile2);
        // try {
        //     const response = await axios.post('/api/upload', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     });
        //     console.log(response.data);
        //     handleClose();
        // } catch (error) {
        //     console.error('Error uploading files', error);
        // }
    };

    return (
        <div>
            <StyledFab color="info" onClick={handleClickOpen}>
                <AddIcon />
            </StyledFab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Добавить новый аккаунт</DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <FormControl fullWidth margin="dense">
                            <InputLabel htmlFor="file-input1">Выберите файл .session</InputLabel>
                            <Input
                                id="file-input1"
                                type="file"
                                onChange={handleFileChange1}
                                inputProps={{ accept: 'image/*' }} // Можно изменить тип файлов, если нужно
                            />
                        </FormControl>
                        <FormControl fullWidth margin="dense">
                            <InputLabel htmlFor="file-input2">Выберите файл .json</InputLabel>
                            <Input
                                id="file-input2"
                                type="file"
                                onChange={handleFileChange2}
                                inputProps={{ accept: 'image/*' }} // Можно изменить тип файлов, если нужно
                            />
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Добавить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FloatingActionButton;
