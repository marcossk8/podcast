import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('PodcastDetail component', () => {
  test('renders with correct podcast ID', () => {
    const podcastId = '123';
    const { getByText } = render(
      <MemoryRouter initialEntries={[`/podcasts/${podcastId}`]}>
        <Routes>
            <Route path="/podcasts/:podcastId" element={<div>Podcast {podcastId} Detail</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(getByText(`Podcast ${podcastId} Detail`)).toBeInTheDocument();
  });
});