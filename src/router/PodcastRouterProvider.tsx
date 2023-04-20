import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
    PodcastList,
    PodcastDetail,
    PodcastDetailEpisode,
    ErrorPage,
} from '../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <PodcastList />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'podcast/:podcastId',
        element: <PodcastDetail />,
    },
    {
        path: 'podcast/:podcastId/episode/:episodeId',
        element: <PodcastDetailEpisode />,
    },
])

export const PodcastRouterProvider = () => {
    return <RouterProvider router={router} />
}
