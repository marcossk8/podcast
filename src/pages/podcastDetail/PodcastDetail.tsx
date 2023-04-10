import { useParams } from 'react-router-dom';
import { MainLayout } from '../../components/layouts';
import { PodcastCardDetail, PodcastEpisodeList } from '../../components';
import { Box } from '@mui/material';

export const PodcastDetail = () => {
    const { podcastId } = useParams();
    
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
                <PodcastEpisodeList />
            </Box>
        </MainLayout>
    )
}
