import React, { useState } from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    IconButton,
    Typography,
    ListItemButton, ListSubheader
} from '@mui/material';
import { Menu, ChevronLeft, Dashboard } from '@mui/icons-material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WifiTetheringOutlinedIcon from '@mui/icons-material/WifiTetheringOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';
import { styled, useTheme, Theme } from '@mui/material/styles';

const drawerWidth = 240;
const drawerCollapsedWidth = 60;

const Main = styled('main')<{ open: boolean }>(({ theme, open }) => ({
    display: 'flex',
    flexGrow: 1,
    // padding: theme.spacing(1), // Уменьшение отступов
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: theme.spacing(2),
}));

const DrawerHeader = styled(Toolbar)(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...theme.mixins.toolbar,
}));

const activeLinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    '&.active': {
        backgroundColor: '#f4f4f4',
    },
};

const Sidebar: React.FC = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const location = useLocation();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const sidebarGeneralItems = [
        { text: 'Inbox', icon: InboxOutlinedIcon, link: '/inbox'},
        { text: 'Менеджер аккаунтов', icon: PeopleAltOutlinedIcon, link: '/' },
        { text: 'Прокси', icon: WifiTetheringOutlinedIcon, link: '/proxy' },
        { text: 'Все аккаунты', icon: Dashboard, link: '/all_accounts' },
        { text: 'Параметры', icon: SettingsOutlinedIcon, link: '/settings'},
    ];

    const sidebarAdminItems = [
        { text: 'Все пользователи', icon: PeopleAltOutlinedIcon, link: '/all_users' },
    ];

    const sidebarAdditionalItems = [
        { text: 'Автоответчик', icon: QuickreplyOutlinedIcon, link: '/auto_reply' },
        { text: 'Чекер аккаунтов', icon: DoneAllOutlinedIcon, link: '/account_checker' },
        { text: 'Массовая рассылка', icon: ForwardToInboxOutlinedIcon, link: '/mass_mailing' },
        { text: 'Конвертер форматов', icon: CachedOutlinedIcon, link: '/formats_converter' },
        { text: 'Парсер чатов', icon: VisibilityOutlinedIcon, link: '/parser_chats'},
        { text: 'Инвайтинг', icon: PersonAddOutlinedIcon, link: '/inviting'},
        { text: 'Накрутка', icon: ShowChartOutlinedIcon, link: '/boosting'},
    ];

    return (
        <div style={{ display: 'flex' }}>
            <Drawer variant="permanent" anchor="left" open={open} sx={{
                    width: open ? drawerWidth : drawerCollapsedWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: open ? drawerWidth : drawerCollapsedWidth,
                        transition: theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                        overflowX: 'hidden',
                    },
                }}>
                <DrawerHeader>
                    {open && (
                        <Typography variant="h6" noWrap>
                            Telegram Soft
                        </Typography>
                    )}
                    <IconButton onClick={toggleDrawer}>
                        {open ? <ChevronLeft /> : <Menu />}
                    </IconButton>
                </DrawerHeader>

                <List>
                    <ListSubheader sx={{ fontWeight: 'bold', textDecoration: 'none' }}>Основные функции</ListSubheader>
                    {sidebarGeneralItems.map((item) => (
                        <ListItem key={item.text}
                                  disablePadding>
                            <ListItemButton component={NavLink} to={item.link} style={{ textDecoration: 'none' }} sx={activeLinkStyle}
                                            className={location.pathname === item.link ? 'active' : ''}>
                                <ListItemIcon>
                                    <item.icon/>
                                </ListItemIcon>
                                <ListItemText secondary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <List>
                    <ListSubheader sx={{ fontWeight: 'bold' }}>Администрирование</ListSubheader>
                    {sidebarAdminItems.map((item) => (
                        <ListItem key={item.text}
                                  disablePadding>
                            <ListItemButton component={NavLink} to={item.link} style={{ textDecoration: 'none' }} sx={activeLinkStyle}
                                            className={location.pathname === item.link ? 'active' : ''}>
                                <ListItemIcon>
                                    <item.icon/>
                                </ListItemIcon>
                                <ListItemText secondary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <List>
                    <ListSubheader sx={{ fontWeight: 'bold' }}>Дополнительные модули</ListSubheader>
                    {sidebarAdditionalItems.map((item) => (
                        <ListItem key={item.text}
                                  disablePadding>
                            <ListItemButton component={NavLink} to={item.link} style={{ textDecoration: 'none' }} sx={activeLinkStyle}
                                            className={location.pathname === item.link ? 'active' : ''}>
                                <ListItemIcon>
                                    <item.icon/>
                                </ListItemIcon>
                                <ListItemText secondary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
            </Main>
        </div>
    );
};

export default Sidebar;
