import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import {styled} from '@mui/system';

interface CardBlockProps {
    title: string;
    count: number;
    selected?: boolean;
}

const StyledCard = styled(Card)(({theme}) => ({
    minWidth: 150,
    margin: theme.spacing(1),
    // border: selected? `2px solid ${theme.palette.primary.main}` : 'none',
    border: '1px solid #e0e0e0',
    cursor: 'pointer'
}));

const CardBlock: React.FC<CardBlockProps> = ({title, count, selected}) => {
    return (
        <StyledCard>
            <CardContent>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="h4" component="div">
                    {count}
                </Typography>
            </CardContent>
        </StyledCard>
    );
};

export default CardBlock;