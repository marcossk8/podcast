import { useReducer } from 'react';
import { Podcast } from '../../interfaces';
import { PodcastsContext } from './PodcastsContext';
import { podcastsReducer } from './podcastsReducer';
import { GET_PODCASTS, ON_LOAD } from './constants';

export interface PodcastsState {
    isLoading: boolean;
    podcastsList: Podcast[];
}

const INITIAL_STATE: PodcastsState = {
    isLoading: true,
    podcastsList: [],
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const PodcastsProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(podcastsReducer, INITIAL_STATE)

    const getPodcasts = (podcasts: Podcast[]) => {
        dispatch({ type: GET_PODCASTS, payload: podcasts })
    }

    const onLoad = (load:boolean) => {
        dispatch({ type: ON_LOAD, payload: load })
    }

    return (
        <PodcastsContext.Provider
            value={{
                ...state,

                //Methods
                getPodcasts,
                onLoad
            }}
        >
            {children}
        </PodcastsContext.Provider>
    )
}