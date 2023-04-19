const express =require('express');
const newsRouter =express.Router();
const axios = require('axios');

const API_KEY="4bbadd7fadmshe8b9df0643f27f9p13cd55jsn741647cfb938";


newsRouter.get('',async(req,res)=>{
    //res.render('news');
    let league=140;
    let season=2022;
    try{
        const newsLSpain= await axios.get(`https://api-football-beta.p.rapidapi.com/teams?league=${league}&season=${season}`,{
        headers : {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': API_KEY
                
        }});
        res.render('news',{teams: newsLSpain.data.response});

        console.log(newsLSpain.data.response);
    }catch(err){
        if (err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        }else if(err.request){
            console.log(err.request);
        }else{
                console.log('Error',err.message);
        }
    }
});
module.exports=newsRouter;