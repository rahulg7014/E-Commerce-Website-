import React from 'react'
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import { useDispatch } from 'react-redux';


export default function Products({data}) {
  // const dispatch = useDispatch()
  return (
    <>
    {/* <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" style={{height : "100%"}} alt="" />: */}
    <div style={{display : "flex", flexWrap: "wrap", gap:"15px",margin:"5px"}} >
    {data.map((allData)=>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={allData.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {allData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {allData.description}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={{fontSize: "15px",position: "relative", bottom: "-1", size: "medium", color: "primary"}}> Add To Cart </Button> 
      </CardActions>
    </Card>
    )}
    </div>
  
    </>
  )
}
