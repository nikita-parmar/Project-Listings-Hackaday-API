const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/:id',(req,response,next)=>{
	
	var id = req.params.id;
	var projectteamUrl = "http://api.hackaday.io/v1/projects/"+ id +"/team?api_key=z9By0e11PbHb3dQu&sortby=followers"
	request(projectteamUrl,{ json: true }, (err, res, body) => {
		response.status(200).json({
			body
			});
		});
	});

module.exports = router;
