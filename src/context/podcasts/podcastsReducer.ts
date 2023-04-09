import { Podcast } from '../../interfaces';
import { PodcastsState } from './PodcastsProvider';
import { GET_PODCASTS } from './constants';

type PodcastsAction = {
    type: 'GET_PODCASTS'
    payload: Podcast[]
}

export const podcastsReducer = (
    state: PodcastsState,
    action: PodcastsAction
): PodcastsState => {
    switch (action.type) {
        case GET_PODCASTS:
            return {
                ...state,
                isLoading: false,
                podcastsList: action.payload,
            }

        default:
            return state
    }
}