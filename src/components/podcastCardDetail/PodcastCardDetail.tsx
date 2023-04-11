import { useContext } from 'react';
import { Card } from '@mui/material';
import { PodcastCardMedia } from '../podcastCard';
import { PodcastCardContentDetail } from './';
import { PodcastsContext } from '../../context';
import './podcastCardDetail.css';

interface Props {
    podcastId: string | undefined;
}

export const PodcastCardDetail = ({ podcastId }: Props) => {
    const { podcastsList } = useContext(PodcastsContext)
    const podcastDetail = podcastsList.find(
        (podcast) => podcast.id.attributes['im:id'] === podcastId
    )

    if (!podcastDetail) return <span>Error</span>

    return (
        <Card
            raised
            elevation={2}
            sx={{
                width: {
                    xs: '100%',
                    sm: 300,
                    md: 300,
                },
                marginBottom: {
                    xs: 1,
                }
            }}
        >
            <PodcastCardMedia
                images={podcastDetail['im:image']}
                name={podcastDetail['im:name'].label}
                className="card-media-img-detail"
            />
            <PodcastCardContentDetail
                name={podcastDetail['im:name'].label}
                author={podcastDetail['im:artist'].label}
                description={podcastDetail.summary.label}
            />
        </Card>
    )
}
