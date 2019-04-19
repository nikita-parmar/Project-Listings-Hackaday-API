const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/:page',(req,response,next)=>{
	var page = req.params.page;
	console.log(page);
	var projectlistUrl = "http://api.hackaday.io/v1/projects?api_key=z9By0e11PbHb3dQu&page=" + page;
		
	request(projectlistUrl,{ json: true }, (err, res, body) => {
		response.status(200).json({
			body
			});
		});
	});

module.exports = router;

