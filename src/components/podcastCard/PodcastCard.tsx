import { Card, CardActionArea } from '@mui/material';
import { PodcastCardContent, PodcastCardMedia } from './';
import { IMImage } from '../../interfaces';
import { useNavigate } from 'react-router-dom';

interface Props {
    images: IMImage[];
    name: string;
    author: string;
    podcastId: string;
}

export const PodcastCard = ({ name, author, images, podcastId }: Props) => {
    const navigate = useNavigate()

    const onNavigateToPodcastDetail = (podcastId:string) => {
        navigate(`/podcast/${podcastId}`)
    }

    return (
        <Card raised elevation={2}>
            <CardActionArea onClick={() => onNavigateToPodcastDetail(podcastId)}>
                <PodcastCardMedia images={images} name={name} />
                <PodcastCardContent name={name} author={author} />
            </CardActionArea>
        </Card>
    )
}
