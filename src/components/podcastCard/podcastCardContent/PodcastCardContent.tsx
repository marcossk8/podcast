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
                sx={{
                    textAlign: 'center',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    fontSize: 20
                }}
            >
                {name}
            </Typography>
            <Typography variant="body2" color={"grey"} textAlign={"center"}>
                Author: {author}
            </Typography>
        </CardContent>
    )
}
