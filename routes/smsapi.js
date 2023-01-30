const router = require('express').Router();
const axios = require("axios");

router.route('/add').post((req, res) => {
    const recipients = req.body.recipients;
    const message = req.body.message;
    const apicode = req.body.apicode;
    const senderid = req.body.senderid;

    var config = {
        method: 'post',
        url: "https://api.itexmo.com/api/broadcast?Recipients=["+recipients+"]&Message="+ message + "&ApiCode="+ apicode + "&SenderId="+senderid+'"',
        headers: { 
          'Authorization': 'Basic Y3J5cHRvZGlwdGVyYUBnbWFpbC5jb206SWFtR3JlYXQxMjM0ISQ='
        }
      };

      axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        console.log(response.data);
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.json(error);
        // console.log(error.data);
      });

    res.json(results)
});

module.exports = router;