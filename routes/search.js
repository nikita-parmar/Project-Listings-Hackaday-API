const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/:searchWord',(req,response,next)=>{
	
	var searchWord = req.params.searchWord;
	var searchUrl = "http://api.hackaday.io/v1/projects/search?search_term="+ searchWord +"&api_key=z9By0e11PbHb3dQu"

	request(searchUrl,{ json: true }, (err, res, body) => {
		response.status(200).json({
			body
			});
		});
	});

module.exports = router;
