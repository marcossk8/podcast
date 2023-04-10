import { CardContent, Typography } from '@mui/material';
import './podcastCardContentDetail.css';

interface Props {
    name: string;
    author: string;
    description: string;
}

export const PodcastCardContentDetail = ({
    name,
    author,
    description,
}: Props) => {
    return (
        <CardContent>
            <Typography variant="h6" fontWeight={700} fontSize={16}>
                {name}
            </Typography>
            <Typography
                fontSize={14}
                fontStyle="italic"
                mb={4}
                className="card-detail-color-descriptions"
            >
                by {author}
            </Typography>
            <div>
                <Typography
                    variant="caption"
                    fontSize={14}
                    fontWeight={700}
                    className="card-detail-color-titles"
                >
                    Description:
                </Typography>
                <Typography
                    variant="body1"
                    fontSize={14}
                    fontStyle="italic"
                    className="card-detail-color-descriptions"
                >
                    {description}
                </Typography>
            </div>
        </CardContent>
    )
}
