import React from 'react';
import { NavBar } from '../../components';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <NavBar />

            {children}
        </div>
    )
}
