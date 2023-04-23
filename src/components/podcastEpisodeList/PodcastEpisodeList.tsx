import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { itunesAppleApi } from '../../api';
import { getLocalPodcastEpisodes, itPassedADay } from '../../utils';
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import { PodcastEpisodeTableBody, PodcastEpisodeTableHead } from './';
import { TableColumns } from '../../interfaces';
import { Episode, EpisodesResponse } from '../../interfaces/episodes';
import { ResultsNotFound, TitleTableHead } from '../';
import { PodcastsContext } from '../../context';

const columns: TableColumns[] = [
    { name: 'Title', align: 'left' },
    { name: 'Date', align: 'left' },
    { name: 'Duration', align: 'right' },
]

export const PodcastEpisodeList = () => {
    const { podcastId } = useParams()
    const { onLoad } = useContext(PodcastsContext)

    const { episodes, dataLocal } = getLocalPodcastEpisodes(podcastId)

    const [episodeList, setEpisodeList] = useState<Episode[]>(episodes?.data || [])

    useEffect(() => {
        if (itPassedADay(episodes?.updateAt)) {
            getPodcastEpisodes()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getPodcastEpisodes = async () => {
        try {
            onLoad(true)
            const { data } = await itunesAppleApi.get<EpisodesResponse>(
                `lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
            )

            const results = data?.results
            if (!results) {
                throw Error('The field named "results" does not exist.')
            }
            const podcastEpisode = results.filter(episode => episode.wrapperType === "podcastEpisode")
            setEpisodeList(podcastEpisode)

            const date = new Date()

            localStorage.setItem(
                'podcastEpisodes',
                JSON.stringify({
                    ...dataLocal,
                    [`${podcastId}`]: {
                        data: podcastEpisode,
                        updateAt: date.getTime(),
                    },
                })
            )
            onLoad(false)
        } catch (error) {
            console.error(error)
            onLoad(false)
        }
    }

    return (
        <Box
            sx={{
                width: {
                    xs: 1,
                    sm: 600,
                    md: 800,
                },
                marginLeft: {
                    xs: 0,
                    sm: 3,
                    md: 5,
                },
            }}
        >
            <TitleTableHead text={`Episodes: ${episodeList.length}`} />
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <PodcastEpisodeTableHead
                                    key={column.name}
                                    name={column.name}
                                    align={column.align}
                                />
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {episodeList.length > 0 ? (
                            episodeList.map((episode) => (
                                <PodcastEpisodeTableBody
                                    key={episode.trackId}
                                    podcastId={podcastId}
                                    trackId={episode.trackId}
                                    trackName={episode.trackName}
                                    releaseDate={episode.releaseDate}
                                    trackTimeMillis={episode.trackTimeMillis}
                                />
                            ))
                        ) : (
                            <ResultsNotFound showIcon={false} title={"No results found."} />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
