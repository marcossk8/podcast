import React from 'react';
import ReactDOM from 'react-dom/client';
import { PodcastsProvider } from './context';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PodcastList, PodcastDetail, PodcastDetailEpisode, ErrorPage } from './pages';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
      path: '/',
      element: <PodcastList />,
      errorElement: <ErrorPage />,
  },
  {
    path: "podcast/:podcastId",
    element: <PodcastDetail />,
  },
  {
    path: "podcast/:podcastId/episode/episodeId",
    element: <PodcastDetailEpisode />,
  },
])

root.render(
  <React.StrictMode>
    <PodcastsProvider>
      <RouterProvider router={router} />
    </PodcastsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
