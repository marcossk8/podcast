import { Card, CardActionArea } from '@mui/material';
import { PodcastCardContent, PodcastCardMedia } from './';
import { IMImage } from '../../interfaces';

interface Props {
    images: IMImage[];
    name: string;
    author: string;
}

export const PodcastCard = ({ name, author, images }: Props) => {
    return (
        <Card raised elevation={2}>
            <CardActionArea>
                <PodcastCardMedia images={images} name={name} />
                <PodcastCardContent name={name} author={author} />
            </CardActionArea>
        </Card>
    )
}
