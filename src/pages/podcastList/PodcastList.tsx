import { useContext } from 'react';
import { PodcastsContext } from '../../context';
import { MainLayout } from '../../components/layouts';
import { FiltersHeader, PodcastCard, ResultsNotFound } from '../../components';
import { Box } from '@mui/material';

export const PodcastList = () => {
    const { podcastsList, isLoading } = useContext(PodcastsContext)

    return (
        <MainLayout>
            <FiltersHeader />
            {podcastsList?.length ? (
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(3, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                        gap: 2,
                        marginTop: 3,
                    }}
                >
                    {podcastsList.map((podcast) => (
                        <PodcastCard
                            key={podcast.id.attributes['im:id']}
                            images={podcast['im:image']}
                            name={podcast['im:name'].label}
                            author={podcast['im:artist'].label}
                            podcastId={podcast.id.attributes['im:id']}
                        />
                    ))}
                </Box>
            ) : (
                <>
                    {!isLoading && <ResultsNotFound title={"No results found."} />}
                </>
            )}
        </MainLayout>
    )
}
