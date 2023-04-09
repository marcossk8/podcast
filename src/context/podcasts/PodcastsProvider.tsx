import { useReducer } from 'react';
import { Podcast } from '../../interfaces';
import { PodcastsContext } from './PodcastsContext';
import { podcastsReducer } from './podcastsReducer';
import { GET_PODCASTS } from './constants';

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

    return (
        <PodcastsContext.Provider
            value={{
                ...state,

                //Methods
                getPodcasts,
            }}
        >
            {children}
        </PodcastsContext.Provider>
    )
}