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
    const image = images?.length ? images[images.length - 1].label : imageNotFound
    
    return (
        <div className="container-card-media">
            <CardMedia 
                component="img"
                alt={name}
                className={`card-media-img ${className}`}
                image={image}
                sx={{ width: 120, height: 120 }}
            />
        </div>
    )
}
