import { useContext } from 'react';
import { AppBar, CircularProgress, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { PodcastsContext } from '../../context';
import './navBar.css'

export const NavBar = () => {
    const { isLoading } = useContext(PodcastsContext)

    return (
        <AppBar position="static" color="inherit" elevation={2}>
            <Toolbar className="container-toolbar">
                <nav>
                    <NavLink to="/" className="nav-link">
                        <Typography variant="h6" color="primary" className="nav-link-title">
                            Podcaster
                        </Typography>
                    </NavLink>
                </nav>
                { isLoading && <CircularProgress size={26} thickness={6} /> }
            </Toolbar>
        </AppBar>
    )
}
