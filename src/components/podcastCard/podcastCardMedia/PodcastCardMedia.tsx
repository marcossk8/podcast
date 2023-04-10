import { CardMedia } from '@mui/material';
import { IMImage } from '../../../interfaces';
import { imageNotFound } from '../../../utils';
import './podcastCardMedia.css';

interface Props {
    images: IMImage[];
    name: string;
    className?: string;
}

export const PodcastCardMedia = ({ images, name, className }: Props) => {
    const image = images.length ? images[2].label : imageNotFound
    return (
        <div className="container-card-media">
            <CardMedia className={`card-media-img ${className}`} image={image} title={name} />
        </div>
    )
}