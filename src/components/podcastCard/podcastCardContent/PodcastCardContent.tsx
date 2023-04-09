import { CardContent, Typography } from '@mui/material';

interface Props {
    name: string;
    author: string;
}

export const PodcastCardContent = ({ name, author }: Props) => {
    return (
        <CardContent>
            <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                sx={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                }}
            >
                {name}
            </Typography>
            <Typography variant="body2" align="center" color="inherit">
                Author: {author}
            </Typography>
        </CardContent>
    )
}
