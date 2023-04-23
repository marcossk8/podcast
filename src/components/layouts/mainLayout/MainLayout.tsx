import React from 'react';
import { NavBar, ScrollToTop } from '../../';
import { Box } from '@mui/material';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <ScrollToTop />
            <NavBar />
            <Box p={3}>
                {children}
            </Box>
        </>
    )
}
