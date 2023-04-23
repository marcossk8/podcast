import { CardContent, Typography } from '@mui/material';

interface Props {
    name: string;
    author: string;
    description: string;
}

export const PodcastCardContentDetail = ({
    name,
    author,
    description,
}: Props) => {
    return (
        <CardContent>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography
                mb={4}
                sx={[
                    (theme) => ({
                        ...theme.description,
                    }),
                ]}
            >
                by {author}
            </Typography>
            <div>
                <Typography variant="subtitle1" fontSize={14}>
                    Description:
                </Typography>
                <Typography
                    sx={[
                        (theme) => ({
                            ...theme.description,
                        }),
                    ]}
                >
                    {description}
                </Typography>
            </div>
        </CardContent>
    )
}
