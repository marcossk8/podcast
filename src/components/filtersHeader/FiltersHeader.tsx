import { useContext } from 'react';
import { Chip } from '@mui/material';
import { TextFieldSearch } from '../textFieldSearch/TextFieldSearch';
import { PodcastsContext } from '../../context';
import './filtersHeader.css';

export const FiltersHeader = () => {
    const { podcastsList } = useContext(PodcastsContext)

    return (
        <div className="container-search">
            <Chip label={`${podcastsList.length} results`} color="primary" className="chip-results"/>

            <TextFieldSearch
                placeholder="Filter podcast..."
                name="search"
                id="search"
                size="small"
                icon
            />
        </div>
    )
}
