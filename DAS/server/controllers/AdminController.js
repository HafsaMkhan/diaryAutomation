const UserType = require('../models/UserType')


exports.AddUserType = (req, res) => {
    UserType.findOne({ title:req.body.title }, (err, account) => {
        if (err) {
            console.log("Error in Server " + account)
            res.status(500).send({ 'addStatus': 'failure', 'err': err });
        }
        if (account != null || account != undefined) {
            console.log("Account found")
            res.status(200).send({ 'addStatus': 'existing' });
        }
        else {
                    console.log("User Type does not exist, creating user type......")
                            let userType = new UserType({title:req.body.title});
                            userType.save((err, account) => {
                                if (err) {
                                    console.log("failure in creating user type", err);
                                    res.status(500).json({ 'addStatus': 'failure', 'err': err });
                                }
                                else {
                                    res.status(200).send({ 'addStatus': 'success' });
                                }
                            });
                        }
                        
                    });
}
