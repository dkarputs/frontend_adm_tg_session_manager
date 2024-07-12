import React from "react";
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Typography,
    Chip,
    Checkbox,
} from '@mui/material';

interface DataRow {
    id: string;
    phone: string;
    geo: string;
    spamBlock: string;
    spamBlockType: string;
    delay: string;
    role: string;
    used: string;
    name: string;
    miscellaneous: React.ReactNode;
}

const rows: DataRow[] = [
    {
        id: '1',
        phone: '13177992386',
        geo: 'US',
        spamBlock: 'Вечный',
        spamBlockType: 'red',
        delay: '1 г 1 мес',
        role: '-',
        used: 'Сегодня, 19:54',
        name: 'Арсений',
        miscellaneous: '...'
    },
];

const getSpamBlockChip = (type: string) => {
    const colorMap: { [key: string]: 'default' | 'error' | 'warning' | 'success' } = {
        red: 'error',
        yellow: 'warning',
        green: 'success',
    };
    const color = colorMap[type] || 'default';
    return <Chip label={type} color={color}/>;
};

const TableList: React.FC = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox />
                            </TableCell>
                            <TableCell>#</TableCell>
                            <TableCell>Телефон</TableCell>
                            <TableCell>Гео</TableCell>
                            <TableCell>Спамблок</TableCell>
                            <TableCell>Отлежка</TableCell>
                            <TableCell>Роль</TableCell>
                            <TableCell>Использован</TableCell>
                            <TableCell>Имя</TableCell>
                            <TableCell>Разное</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell padding="checkbox">
                                    <Checkbox/>
                                </TableCell>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.geo}</TableCell>
                                <TableCell>{getSpamBlockChip(row.spamBlockType)}</TableCell>
                                <TableCell>{row.delay}</TableCell>
                                <TableCell>{row.role}</TableCell>
                                <TableCell>{row.used}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.miscellaneous}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default TableList;