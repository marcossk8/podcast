export const getLocalPodcastList = () => {
    const localDataPodcast = localStorage.getItem('podcastList')
    return localDataPodcast ? JSON.parse(localDataPodcast) : []
}
