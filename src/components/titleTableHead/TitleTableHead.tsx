import { Paper, Typography } from '@mui/material';

interface Props {
    text: string;
}

export const TitleTableHead = ({ text }: Props) => {
    return (
        <Paper className="container-header-number-episodes">
            <Typography variant="h4" fontWeight={700} fontSize={18}>
                {text}
            </Typography>
        </Paper>
    )
}
