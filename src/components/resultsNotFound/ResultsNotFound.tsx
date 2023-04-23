import { Box, Typography } from '@mui/material';
import { SearchOff } from '@mui/icons-material';

interface Props {
    showIcon?: boolean;
    title: string;
}

export const ResultsNotFound = ({ showIcon = true, title }: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: 1,
                marginTop: 3,
                marginBottom: 3
            }}
        >

            { showIcon && <SearchOff sx={{ fontSize: 80, color: 'grey' }} /> }
            <Typography variant="h5" component="p" sx={{ color: 'grey', marginTop: 2 }}>
                {title}
            </Typography>
        </Box>
    )
}
