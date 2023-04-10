import { Podcast } from '../../interfaces'
import { PodcastsState } from './PodcastsProvider'
import { GET_PODCASTS, ON_LOAD } from './constants'

type PodcastsAction =
    | {
          type: 'GET_PODCASTS'
          payload: Podcast[]
      }
    | {
          type: 'ON_LOAD'
          payload: boolean
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

        case ON_LOAD:
            return {
                ...state,
                isLoading: action.payload,
            }

        default:
            return state
    }
}
