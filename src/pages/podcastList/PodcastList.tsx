import { useEffect, useState } from 'react';
import { MainLayout } from '../../layouts';
import { itunesAppleApi } from '../../api';
import { itPassedADay } from '../../utils';
import { Podcast, PodcastsResponse } from '../../interfaces';

export const PodcastList = () => {
    const localDataPodcast = localStorage.getItem('podcastList')
    const list = localDataPodcast ? JSON.parse(localDataPodcast) : []
    const [podcastList, setPodcastList] = useState<Podcast[]>(list)
    
    useEffect(() => {
        const timeGetPodcastList = localStorage.getItem('timeGetPodcastList')
        
        if(itPassedADay(timeGetPodcastList)) {
            getTopPodcasts()
        }
    }, [])
    
    const getTopPodcasts = async () => {
        try {
            const { data } = await itunesAppleApi.get<PodcastsResponse>("/us/rss/toppodcasts/limit=100/genre=1310/json")
            
            const entry = data?.feed?.entry
            if(!entry) {
                throw Error('No existe un campo llamado entry.')
            }
            
            setPodcastList(entry)
            const date = new Date();
            localStorage.setItem('timeGetPodcastList', JSON.stringify(date.getTime()));
            localStorage.setItem('podcastList', JSON.stringify(entry));
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <MainLayout>
            <>
                {podcastList.map((podcast) => (
                    <div key={podcast.id.attributes['im:id']}>
                        <p>{podcast.title.label}</p>
                    </div>
                ))}
            </>
        </MainLayout>
    )
}
