import { ChangeEvent, useContext } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
import { SxProps, Theme } from '@mui/material';
import { PodcastsContext } from '../../context';
import { getLocalPodcastList } from '../../utils';
import { Podcast } from '../../interfaces';

interface Props {
    label?: string;
    placeholder?: string;
    name: string;
    icon: boolean;
    size: 'small' | 'medium' | undefined;
    id?: string;
    sx?: SxProps<Theme>
}

export const TextFieldSearch = ({
    label,
    placeholder,
    name,
    icon = true,
    size = 'small',
    id,
    sx
}: Props) => {

    const { podcastsList, getPodcasts } = useContext(PodcastsContext)
    const localPodcastList:Podcast[] = getLocalPodcastList()

    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value?.toLowerCase()
            const podcasts = localPodcastList.filter(
                (podcast) =>
                    podcast['im:name'].label.toLowerCase().includes(value) ||
                    podcast['im:artist'].label.toLowerCase().includes(value)
            )
            getPodcasts(podcasts)
    }

    return (
        <TextField
            label={label}
            name={name}
            onChange={handleChangeSearch}
            size={size}
            id={id}
            placeholder={placeholder}
            sx={sx}
            InputProps={{
                startAdornment: icon && (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
            }}
        />
    )
}