import { useEffect, useContext } from 'react';
import { PodcastsContext } from '../../context';
import { MainLayout } from '../../components/layouts';
import { itunesAppleApi } from '../../api';
import { getLocalPodcastList, itPassedADay } from '../../utils';
import { PodcastsResponse } from '../../interfaces';
import { FiltersHeader, PodcastCard, ResultsNotFound } from '../../components';
import { Box } from '@mui/material';

export const PodcastList = () => {
    const { podcastsList, isLoading, getPodcasts } = useContext(PodcastsContext)

    useEffect(() => {
        const timeGetPodcastList = localStorage.getItem('timeGetPodcastList')

        if (itPassedADay(timeGetPodcastList)) {
            getTopPodcasts()
        } else {
            getPodcasts(getLocalPodcastList())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getTopPodcasts = async () => {
        try {
            const { data } = await itunesAppleApi.get<PodcastsResponse>(
                '/us/rss/toppodcasts/limit=100/genre=1310/json'
            )

            const entry = data?.feed?.entry
            if (!entry) {
                throw Error('No existe un campo llamado entry.')
            }

            getPodcasts(entry)
            const date = new Date()
            localStorage.setItem(
                'timeGetPodcastList',
                JSON.stringify(date.getTime())
            )
            localStorage.setItem('podcastList', JSON.stringify(entry))
        } catch (error) {
            console.error(error)
        }
    }

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
                        />
                    ))}
                </Box>
            ) : (
                <>
                    {!isLoading && <ResultsNotFound />}
                </>
            )}
        </MainLayout>
    )
}
