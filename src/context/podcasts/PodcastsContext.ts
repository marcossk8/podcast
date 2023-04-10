import { createContext } from 'react';
import { Podcast } from '../../interfaces';

export interface PodcastsContextProps {
    isLoading: boolean;
    podcastsList: Podcast[];
    getPodcasts: (podcasts: Podcast[]) => void;
    onLoad: (load: boolean) => void;
}

export const PodcastsContext = createContext<PodcastsContextProps>({} as PodcastsContextProps);