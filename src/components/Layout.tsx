import {Box, Drawer} from '@mui/material';
import React from "react";
import Sidebar from "./Sidebar";
import ProtectedRoute from "./ProtectedRoute";

const drawerWidth = 240;

function Layout({children}: { children: React.ReactNode }) {
    return (
        <Box sx={{display: 'flex'}}>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Sidebar/>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                {children}
            </Box>
        </Box>
    );
}