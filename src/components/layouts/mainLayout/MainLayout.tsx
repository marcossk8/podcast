import React from 'react';
import { NavBar, ScrollToTop } from '../../';
import './mainLayout.css';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <ScrollToTop />
            <NavBar />
            <div className="container-layout-children">
                {children}
            </div>
        </>
    )
}
