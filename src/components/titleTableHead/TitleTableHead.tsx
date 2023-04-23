import { Paper, Typography } from '@mui/material';

interface Props {
    text: string;
}

export const TitleTableHead = ({ text }: Props) => {
    return (
        <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h3">
                {text}
            </Typography>
        </Paper>
    )
}
