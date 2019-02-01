const User = require('../models/User')
const UserType = require('../models/UserType')
const Login = require('../models/LoginUser')


exports.RegisterUser = (req, res) => {
    console.log(req.body[0]);
    console.log(req.body[1]);
    console.log(req.body[2]);
    console.log("Register attempt by :", req.body[1].email)
    User.findOne({ CNIC:req.body[0].CNIC }, (err, account) => {
        if (err) {
            console.log("Error in Server " + account)
            res.status(500).send({ 'registerStatus': 'failure', 'err': err });
        }
        if (account != null || account != undefined) {
            console.log("Account found")
            res.status(200).send({ 'registerStatus': 'existing' });
        }
        else {
                    console.log("Account not found, create account")
                    console.log("%%%%%%%%%%%%%",req.body[2]);
                    UserType.findOne({title:req.body[2]},(err,account)=>{
                        if(err){
                            console.log("Error in Server " + account)
                            res.status(500).send({ 'registerStatus': 'failure', 'err': err });
                        }
                        if(account == null || account == undefined){
                            res.status(500).send({ 'registerStatus': 'wrong_title', 'err': err });
                        }else{
                            let newAccount = new User(req.body[0]);
                            newAccount.save((err, account) => {
                                if (err) {
                                    console.log("failure in creating account", err);
                                    res.status(500).json({ 'registerStatus': 'failure', 'err': err });
                                }
                                else {
                                    console.log("account created", account);
                                    let loginUser = new Login({
                                        email: req.body[1].email,
                                        password: req.body[1].password,
                                        userId:newAccount._id
                                    })
                                    loginUser.save((err, user) => {
                                        if (err) {
                                            console.log("failure in creating account", err);
                                            res.status(500).json({ 'registerStatus': 'failure', 'err': err });
                                        }
                                        else {
                                            res.status(200).json({ 'registerStatus': 'created','user':user, 'err': err });
                                        }
                                    })
                                }
                            });
                        }
                        
                    })
                }
            });
}


exports.handleLogin = (req, res) => {
    console.log("login attempt by: ", req.body.email)
    Login.findOne({email:req.body.email},(err,account)=>{
        if(err){
            console.log("failure in login of account", err);
            res.status(500).json({ 'loginStatus': 'failure', 'err': err });
        }
        if(account != null || account != undefined){
            if(account.password == req.body.password){
                res.status(200).json({ 'loginStatus': 'authorized','err': err,'username':account.email });
            }
            else{
                res.status(200).json({ 'loginStatus': 'unauthorized','err': err });
            }
        }
        if(account == null || account == undefined){
            res.status(200).json({ 'loginStatus': 'not_exist','err': err });
        }
    });
};
