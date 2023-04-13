# Podcast App

Podcast website with three main pages programmed with React and Typescript.
- The first page is the home page (`/`), which displays a list of podcasts showing the image, name and author. This page could also include a search bar to allow users to find specific podcasts more easily.
- The second page is the detail page for a specific podcast (`/podcast/:podcastId`), which would display the podcast's image, name, author, and description. It would also include a list of episodes for that podcast, with each episode's title, date, and audio duration.
- Finally, the third page is the detail page for a specific episode (`podcast/:podcastId/episode/:episodeId`), which would include all the information from the previous page (the podcast image, name, author, and description, as well as the list of episodes). Additionally, it would provide details for the specific episode, including its title, description, and audio.
## How to use

🔵 [Live Demo]()

Clone this repository and navigate to podcast-app folder, install packages using `yarn install` and execute project using `yarn start`

```
git clone https://github.com/marcossk8/podcast.git
cd podcast-app
yarn install
yarn start
```

Then open http://localhost:3000/ to see your app.

## Technologies

- React
- TypeScript

## Libraries

- React Router Dom
- MUI
- MUI Icons
- Jest
- React Library Testing
- Axios
- Moment

## API

- List of the 100 most popular podcasts:
https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json

- Detail of a podcast:
https://itunes.apple.com/lookup?id=934552872&media=podcast
&entity=podcastEpisode&limit=20

### Author:
- Marcos Almendros | [LinkedIn](https://www.linkedin.com/in/marcos-almendros-225b75183/) | [Email](mailto:marcosdalmendros@gmail.com)