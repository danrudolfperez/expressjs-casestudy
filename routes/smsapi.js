const router = require('express').Router();
const axios = require("axios");

router.route('/').post((req, res) => {

    var config = {
      method: 'post',
      url: 'https://api.itexmo.com/api/broadcast?Recipients=["09295043363"]&Message=Test&ApiCode=PR-DANRU483889_87FEP&SenderId=QUICKLEAN',
      headers: { 
        'Authorization': 'Basic Y3J5cHRvZGlwdGVyYUBnbWFpbC5jb206SWFtR3JlYXQxMjM0ISQ='
      }
    };
    
    axios(config)
    .then(function (response) {
    //   console.log(JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    //   res.status(500).json({ message: err });
    });




    // const recipients = req.params.Recipients;
    // const message = req.params.Message;
    // const apicode = req.params.Apicode;
    // const senderid = req.params.SenderId;

    // var data = JSON.stringify({
    //   "Recipients": recipients,
    //   "Message": message,
    //   "ApiCode": apicode,
    //   "SenderId": senderid
    // });

	// axios.post("https://api.itexmo.com/api/broadcast", {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Basic Y3J5cHRvZGlwdGVyYUBnbWFpbC5jb206SWFtR3JlYXQxMjM0ISQ='
    //     },
    //     data: data
	// })
	// 	.then(response => {
	// 		res.status(200).json(response.data);
	// 	})
	// 	.catch((err) => {
	// 		res.status(500).json({ message: err });
	// 	});



    // var config = {
    //     method: 'post',
    //     url: "https://api.itexmo.com/api/broadcast?Recipients=["+recipients+"]&Message="+ message + "&ApiCode="+ apicode + "&SenderId="+senderid+'"',
    //     headers: { 
    //       'Authorization': 'Basic Y3J5cHRvZGlwdGVyYUBnbWFpbC5jb206SWFtR3JlYXQxMjM0ISQ='
    //     }
    //   };

    //   axios(config)
    //   .then(function (response) {
    //     // console.log(JSON.stringify(response.data));
    //     console.log(response.data);
    //     res.json(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     res.json(error);
    //     // console.log(error.data);
    //   });








    // var data = JSON.stringify({
    //   "Recipients": "09295043363",
    //   "Message": "Test",
    //   "ApiCode": "PR-DANRU483889_87FEP",
    //   "SenderId": "QUICKLEAN"
    // });
    
    // var config = {
    //   method: 'post',
    //   url: 'https://cocoon-rewards.com/sms',
    //   headers: { 
    //     'Authorization': 'Basic Y3J5cHRvZGlwdGVyYUBnbWFpbC5jb206SWFtR3JlYXQxMjM0ISQ=', 
    //     'Content-Type': 'application/json'
    //   },
    //   data : data
    // };
    
    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    //   res.json(response.data);
    // })
    // .catch(function (error) {
    //   console.log(error);
    //   res.json(error);
    // });


});

module.exports = router;