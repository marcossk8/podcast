import React from 'react';
import { NavBar } from '../../';
import './mainLayout.css';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className="container-layout-children">
                {children}
            </div>
        </>
    )
}
