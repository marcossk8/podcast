import { Box, Card, CardContent, Typography } from '@mui/material';
import './podcastCardEpisode.css';

interface Props {
    trackName?: string;
    description?: string;
    episodeUrl?: string;
}
export const PodcastCardEpisode = ({
    trackName,
    description,
    episodeUrl,
}: Props) => {
    const descriptionParseHtml = {__html: description ? `<p>${description}</p>` : '<div></div>'}

    return (
        <Box
            sx={{
                width: {
                    xs: '100%',
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
            <Card raised elevation={2}>
                <CardContent>
                    <Typography variant="h3" fontWeight={700} fontSize={22}>
                        {trackName}
                    </Typography>
                    <Typography
                        variant="body1"
                        fontSize={14}
                        fontStyle="italic"
                        className="card-episode-descriptions"
                        dangerouslySetInnerHTML={descriptionParseHtml}
                    />

                    <audio src={episodeUrl} controls className="audio-episode"></audio>
                </CardContent>
            </Card>
        </Box>
    )
}
