import { Typography } from '@mui/material';
import { SearchOff } from '@mui/icons-material';
import './resultsNotFound.css';

export const ResultsNotFound = () => {
    return (
        <div className="container-results-not-found">
            <SearchOff className="icon-search-results-not-found" sx={{fontSize: 100}} />
            <Typography
                variant="h4"
                component="p"
                className="text-results-not-found"
            >
                No results found.
            </Typography>
        </div>
    )
}
