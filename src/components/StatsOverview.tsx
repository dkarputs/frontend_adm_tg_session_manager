import React from 'react';
import { Grid } from '@mui/material';
import CardBlock from './CardBlock';

const StatsOverview: React.FC = () => {
    const data = [
        {title: 'Все аккаунты', count: 518, selected: true},
        {title: 'Для работы', count: 14},
        {title: 'Архив', count: 436},
        {title: 'Без спамблока', count: 40},
        {title: 'Со спамблоком', count: 13},
    ];

    return (
        <div>
            <Grid container spacing={4} justifyContent="center">
                {data.map((item, index) => (
                    <Grid item key={index}>
                        <CardBlock title={item.title} count={item.count} selected={item.selected}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default StatsOverview;
