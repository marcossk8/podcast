import { Typography } from '@mui/material';
import { SearchOff } from '@mui/icons-material';
import './resultsNotFound.css';

export const ResultsNotFound = () => {
    return (
        <div className="container-results-not-found">
            <SearchOff sx={{fontSize: 100}} />
            <Typography
                variant="h4"
                component="p"
            >
                No results found.
            </Typography>
        </div>
    )
}
