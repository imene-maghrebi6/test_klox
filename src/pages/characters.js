import React, {useEffect, useState} from 'react';
import AutoSelect from '../components/autoSelect';
import ListCharacters from './../components/listCharacter';
import axios from 'axios'

const Characters = () => {

    const [episodes, setEpisodes] = useState([])
    const [selectedEpisode, setSelectedEpisode] = useState({})

    useEffect(async() => {

      const result = await axios.post(
        'https://rickandmortyapi.com/graphql',
        {
            query: `
            query {
                episodes
                    {results
                        {id, name, episode, characters {id, name, species,image}}}
              }`
        }

      )
      setEpisodes(result.data.data.episodes.results)
    }, [])

    console.log('episodes', episodes)

    const handleEpisodeChange = (episodeId) => {
      const episode = episodes.find(episode => episode.id === episodeId)
      console.log('episode', episode)
      setSelectedEpisode(episode)
    }
    return (
        <>
          <AutoSelect episodes={episodes} callback={handleEpisodeChange}/>
          <ListCharacters selectedEpisode={selectedEpisode} />
      
        </>
    )
}

export default Characters