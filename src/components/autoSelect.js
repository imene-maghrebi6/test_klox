import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AutoSelect({callback, episodes}) {
  const classes = useStyles();
  const [episode, setEpisode] = useState('')

  const handleChange = (event) => {
    setEpisode(event.target.value);
    callback(event.target.value)
  };

  return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">episode</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={episode}
          onChange={handleChange}
        >
        {episodes.map(episode => 
            <MenuItem value={episode.id}>{episode.episode} {episode.name} </MenuItem>
        )}
        </Select>
      </FormControl>
  )

}

