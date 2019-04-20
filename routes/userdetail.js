const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/:id',(req,response,next)=>{
	var owner_id = req.params.id;
	var userDetailUrl = "http://api.hackaday.io/v1/users/" + owner_id + "?api_key=z9By0e11PbHb3dQu";
	console.log("Request sent: /user/" + owner_id);
	
	request(userDetailUrl,{ json: true }, (err, res, body) => {
		response.status(200).json({
			body
			});
		});
	});

module.exports = router;

