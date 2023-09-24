
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import blueGrey from '@mui/material/colors/blueGrey';

export default function MediaCard(props) {
  console.log();
  return (
    <Card style={{ maxWidth: 445 }}>
      <CardMedia
        style={{ height: 540   }}
        image={props.image}
     />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h1>{props.title}</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h4>{props.body}</h4>
        </Typography>
      </CardContent>
      
    </Card>
  );
}
