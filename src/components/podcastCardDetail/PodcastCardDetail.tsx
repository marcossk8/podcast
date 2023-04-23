import { useContext } from 'react';
import { Card } from '@mui/material';
import { PodcastCardMedia } from '../podcastCard';
import { PodcastCardContentDetail } from './';
import { PodcastsContext } from '../../context';
import { ResultsNotFound } from '../';

interface Props {
    podcastId?: string;
}

export const PodcastCardDetail = ({ podcastId }: Props) => {
    const { podcastsList } = useContext(PodcastsContext)
   
    const podcastDetail = podcastsList?.find(
        (podcast) => podcast.id.attributes['im:id'] === podcastId
    )

    if (!podcastDetail) return <ResultsNotFound showIcon={false} title={"The podcast id number is incorrect."} />

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
                sx={{ borderRadius: '4px' }}
            />
            <PodcastCardContentDetail
                name={podcastDetail['im:name'].label}
                author={podcastDetail['im:artist'].label}
                description={podcastDetail.summary.label}
            />
        </Card>
    )
}
