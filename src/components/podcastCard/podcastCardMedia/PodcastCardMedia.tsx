import { Box, CardMedia, SxProps, Theme } from '@mui/material';
import { IMImage } from '../../../interfaces';
import { imageNotFound } from '../../../utils';

interface Props {
    images: IMImage[];
    name: string;
    sx?: SxProps<Theme>
}

export const PodcastCardMedia = ({ images, name, sx }: Props) => {
    const image = images?.length ? images[images.length - 1].label : imageNotFound
    
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 1,
                paddingTop: 2,
            }}
        >
            <CardMedia
                component="img"
                alt={name}
                image={image}
                sx={{ width: 120, height: 120, borderRadius: '50%', ...sx }}
            />
        </Box>
    )
}
