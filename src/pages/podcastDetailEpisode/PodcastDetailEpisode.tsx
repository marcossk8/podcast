import { useParams } from 'react-router-dom';
import { MainLayout } from '../../components/layouts';
import { PodcastCardDetail, PodcastCardEpisode } from '../../components';
import { Box } from '@mui/material';
import { getLocalPodcastEpisodes } from '../../utils';
import { Episode } from '../../interfaces/episodes';

export const PodcastDetailEpisode = () => {
    const { podcastId, episodeId } = useParams();
    const { episodes } = getLocalPodcastEpisodes(podcastId)
    const data:Episode[] = episodes.data

    const episodeLocal = data.find(episode => `${episode.trackId}` === episodeId)

    return (
        <MainLayout>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',
                        md: 'row',
                    },
                    marginTop: 3,
                }}
            >
                <PodcastCardDetail podcastId={podcastId} />
                <PodcastCardEpisode
                    trackName={episodeLocal?.trackName}
                    description={episodeLocal?.description}
                    episodeUrl={episodeLocal?.episodeUrl}
                />
            </Box>
        </MainLayout>
    )
}
