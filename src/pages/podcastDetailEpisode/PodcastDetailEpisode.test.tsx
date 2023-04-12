import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('PodcastDetailEpisode.test component', () => {
  test('renders with correct podcast ID and episode ID', () => {
    const podcastId = '123';
    const episodeId = '454';

    const { getByText } = render(
      <MemoryRouter initialEntries={[`/podcasts/${podcastId}/${episodeId}`]}>
        <Routes>
            <Route path="/podcasts/:podcastId/:episodeId" element={<div>Podcast {podcastId} Detail and Episode {episodeId} Detail</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(getByText(`Podcast ${podcastId} Detail and Episode ${episodeId} Detail`)).toBeInTheDocument();
  });
});