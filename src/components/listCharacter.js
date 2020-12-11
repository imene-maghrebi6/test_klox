import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Character from './Character'

const useStyles = makeStyles(() => ({
 
    root: {
      flexGrow: 1,
      paddingTop: 60,
      maxWidth: '100vw',
    },
  }));
  


const ListCharacters =({selectedEpisode}) => {
    const classes = useStyles();

    return(
        <Grid container justify="center" spacing={10} className={classes.root}>
            {selectedEpisode.characters ? selectedEpisode.characters.map(character => (
                <Grid key={character} item>
                    <Character 
                    image={character.image} 
                    name={character.name}
                    species={character.species}/>
                </Grid>
            )): <div>Select an episode</div>}
        </Grid>
    )
}

export default ListCharacters