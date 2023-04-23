import { useContext } from 'react';
import { Box, Chip } from '@mui/material';
import { TextFieldSearch } from '../textFieldSearch/TextFieldSearch';
import { PodcastsContext } from '../../context';

export const FiltersHeader = () => {
    const { podcastsList } = useContext(PodcastsContext)

    return (
        <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
            <Chip label={`${podcastsList.length} results`} color="primary" sx={{ marginRight: 2 }} />

            <TextFieldSearch
                placeholder="Filter podcast..."
                name="search"
                id="search"
                size="small"
                icon
            />
        </Box>
    )
}
