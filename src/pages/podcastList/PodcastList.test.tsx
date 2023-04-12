import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { PodcastList } from './PodcastList';
import { BrowserRouter } from 'react-router-dom';
import { PodcastsContext } from '../../context';

const Provider = ({children, value}: { children: ReactNode, value: any }) => {
    return (
        <PodcastsContext.Provider
            value={value}
        >
            {children}
        </PodcastsContext.Provider>
    )
}

describe('Tests 1 in PodcastList component', () => {
    it('Checks if PodcastList component renders ¨No results found¨ text when podcastList is empty', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Provider value={{
                    podcastsList: [], isLoading: false, getPodcasts: jest.fn(), onLoad: jest.fn()
                }}>
                    <PodcastList/>
                </Provider>
            </BrowserRouter>
        );
        const podcastListElement = getByText('No results found.');
        expect(podcastListElement).toBeInTheDocument();
    });
})

describe('Tests 2 in PodcastList component', () => {
    it('Checks if PodcastList component renders array podcastsList', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Provider
                    value={{
                        podcastsList: [
                            {
                                'im:name': { label: 'New Rory & MAL' },
                                'im:artist': { label: 'Rory Farrell & Jamil "Mal" Clay'},
                                images: [{ label: 'https://example.com/image.png', attributes: {height: "55"} }],
                                id: { attributes: {'im:id': '1535809341'} },
                            },
                        ],
                        isLoading: false,
                        getPodcasts: jest.fn(),
                        onLoad: jest.fn(),
                    }}
                >
                    <PodcastList />
                </Provider>
            </BrowserRouter>
        )

        const podcastListElement = getByText('New Rory & MAL');
        expect(podcastListElement).toBeInTheDocument();
    });
})