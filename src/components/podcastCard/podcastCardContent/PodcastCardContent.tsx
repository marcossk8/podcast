import { CardContent, Typography } from '@mui/material';
import './podcastCardContent.css';

interface Props {
    name: string;
    author: string;
}

export const PodcastCardContent = ({ name, author }: Props) => {
    return (
        <CardContent>
            <Typography
                fontSize={20}
                gutterBottom
                variant="h5"
                className="card-text-name"
            >
                {name}
            </Typography>
            <Typography variant="body2" className="card-text-author">
                Author: {author}
            </Typography>
        </CardContent>
    )
}
