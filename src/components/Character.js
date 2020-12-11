
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        minWidth: 400,
      },
      
    name: {
        fontWeight: 'bold',
    },  
    species:{
        marginRight:'10px'
    }, 
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
});

const Character = ({image , name, species }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <div className= {classes.container}>  
            <Typography className={classes.name} gutterBottom variant="h5" component="h2">
                {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h5">
                    {species}
            </Typography>
        </div>
        <CardMedia
            className={classes.media}
            image={image}
        />
        </Card>
    );
}

export default Character