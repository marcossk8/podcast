import { render, screen, fireEvent } from '@testing-library/react';
import { PodcastCard } from './PodcastCard';
import { BrowserRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

describe('PodcastCard', () => {
  const images = [{ label: 'https://example.com/image.png', attributes: { height: '100' } }];
  const name = 'Louder Than A Riot';
  const author = 'NPR';
  const podcastId = '123';

  it('renders the name and author', () => {
    render(<PodcastCard images={images} name={name} author={author} podcastId={podcastId} />);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(`Author: ${author}`)).toBeInTheDocument();
  });

  it('renders the podcast image', () => {
    render(<PodcastCard images={images} name={name} author={author} podcastId={podcastId} />);

    const podcastImage = screen.getByRole('img', { name });

    expect(podcastImage).toBeInTheDocument();
  });

  it('navigates to the podcast detail page when clicked', () => {
   
    render(
        <BrowserRouter>
            <PodcastCard
                images={images}
                name={name}
                author={author}
                podcastId={podcastId}
            />
        </BrowserRouter>
    )

    const cardActionArea = screen.getByRole('button');
    fireEvent.click(cardActionArea);

    expect(mockedUsedNavigate).toHaveBeenCalledWith(`/podcast/${podcastId}`);
  });
});