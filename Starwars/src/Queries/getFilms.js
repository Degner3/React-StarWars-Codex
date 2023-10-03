
export const getFilms = `query AllFilms {
    allFilms {
      films {
        created
        director
        id
        title
        edited
        episodeID
        openingCrawl
        producers
        releaseDate
      }
    }
  }`