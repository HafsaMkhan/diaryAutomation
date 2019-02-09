const user = require('../models/LoginUser')
const jwt = require('jsonwebtoken');
var VerifyToken = require('./verifyToken');



exports.getJWT = (VerifyToken, (req, res)  =>{
        var token = req.headers['x-access-token'];
        if (!token) return res.status(401).json({ auth: false, 'tokenStatus': 'notfound' });
        
        jwt.verify(token, 'secretkey', function(err, decoded) {
          if (err) return res.status(500).json({ auth: false, 'tokenStatus': 'invalid' });
          else{
            user.findById(decoded.id, { password: 0 }, function (err, account) {
                if (err) return res.status(500).json({auth: false, 'tokenStatus': 'invaliduser'});
                if (!user) return res.status(500).json({auth: false, 'tokenStatus': 'invalid'});
                res.status(200).send({auth: true, 'tokenStatus': 'valid', account});
                
          })
        };
      })
    })

    // var token = jwt.sign({ id: user._id }, 'secretkey', {
    //   expiresIn: 8600 // expires in 24 hours
    // });