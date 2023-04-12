export const getLocalPodcastEpisodes = (podcastId?: string) => {
    const episodesLocal = localStorage.getItem('podcastEpisodes')
    const dataLocal = episodesLocal && JSON.parse(episodesLocal)
    const episodes = dataLocal && dataLocal[podcastId!]
    return {dataLocal, episodes}
} 