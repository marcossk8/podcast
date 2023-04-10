import { TableCell, TableRow, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { converMsecInHrMinSec } from '../../../utils';
import moment from 'moment';

interface Props {
    podcastId: string | undefined;
    trackId: number;
    trackName: string;
    releaseDate: Date;
    trackTimeMillis: number;
}

export const PodcastEpisodeTableBody = ({
    podcastId,
    trackId,
    trackName,
    releaseDate,
    trackTimeMillis,
}: Props) => {
    return (
        <TableRow>
            <TableCell>
                <NavLink
                    to={`/podcast/${podcastId}/episode/${trackId}`}
                    className="link-episode-text"
                >
                    <Typography color="primary">{trackName}</Typography>
                </NavLink>
            </TableCell>
            <TableCell>{moment(releaseDate).format('DD/MM/YYYY')}</TableCell>
            <TableCell align="right">{converMsecInHrMinSec(trackTimeMillis)}</TableCell>
        </TableRow>
    )
}
