import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100vh'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));


const Home = () => {
  console.log('HOME')
  const classes = useStyles();
  return (
    <Card className={classes.card}>

 
    <CardMedia
    className={classes.media}
    image="/static/images/bg7.jpg"
  />

</Card>
  )
}

export default Home
