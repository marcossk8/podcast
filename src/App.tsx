import { useContext, useEffect } from 'react';
import { PodcastRouterProvider } from './router';
import { lightTheme } from './themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { itunesAppleApi } from './api';
import { PodcastsResponse } from './interfaces';
import { getLocalPodcastList, itPassedADay } from './utils';
import { PodcastsContext } from './context';

export const App = () => {

    const { getPodcasts } = useContext(PodcastsContext)

    useEffect(() => {
        const podcastsUpdateAt = localStorage.getItem('podcastsUpdateAt')

        if (itPassedADay(podcastsUpdateAt)) {
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
                throw Error('The field named "entry" does not exist.')
            }

            getPodcasts(entry)
            const date = new Date()
            localStorage.setItem(
                'podcastsUpdateAt',
                JSON.stringify(date.getTime())
            )
            localStorage.setItem('podcastList', JSON.stringify(entry))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <PodcastRouterProvider />
        </ThemeProvider>
    )
}
