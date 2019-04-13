const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/:id',(req,response,next)=>{
	
	var id = req.params.id;
	var commentUrl = "http://api.hackaday.io/v1/projects/"+ id +"/comments?api_key=z9By0e11PbHb3dQu&sortby=projects"

	request(commentUrl,{ json: true }, (err, res, body) => {
		response.status(200).json({
			body
			});
		});
	});

module.exports = router;
