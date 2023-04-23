import { Box, Card, CardContent, Typography } from '@mui/material';

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
                    <Typography variant="h3">
                        {trackName}
                    </Typography>
                    <Typography
                        sx={[
                            { "> p:nth-child(1)": { marginBottom: 0, marginTop: 1 } },
                            (theme) => ({
                                ...theme.description,
                            }),
                        ]}
                        dangerouslySetInnerHTML={descriptionParseHtml}
                    />

                    <Box mt={3}>
                        <audio src={episodeUrl} controls style={{ width: '100%' }}></audio>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
