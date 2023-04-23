import { useContext } from 'react';
import { AppBar, Box, CircularProgress, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { PodcastsContext } from '../../context';

interface Props {
    title?: string
}

export const NavBar = ({ title='Podcaster' }: Props) => {
    const { isLoading } = useContext(PodcastsContext)

    return (
        <AppBar position="static" color="inherit" elevation={2}>
            <Toolbar>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'ceter',
                        justifyContent: 'space-between',
                        width: 1,
                    }}
                >
                    <nav>
                        <NavLink to="/">
                            <Typography variant="h1" color="primary">
                                {title}
                            </Typography>
                        </NavLink>
                    </nav>
                    {isLoading && <CircularProgress size={26} thickness={6} />}
                </Box>
            </Toolbar>
        </AppBar>
    )
}
