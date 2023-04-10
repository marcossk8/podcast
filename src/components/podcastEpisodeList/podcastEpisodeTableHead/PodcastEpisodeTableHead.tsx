import { TableCell, Typography } from '@mui/material';
import { TableColumns } from '../../../interfaces';

export const PodcastEpisodeTableHead = ({ name, align }: TableColumns) => {
    return (
        <TableCell align={align}>
            <Typography fontWeight={700}>{name}</Typography>
        </TableCell>
    )
}
