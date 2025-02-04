import '../models/connection.js';
import UserSchemaModel from '../models/user.model.js'

export var save = async(req, res) => {
    // console.log("ram");
    
    var usersList = await UserSchemaModel.find();
    var l = usersList.length;
    var _id = l == 0 ? 1 : usersList[l - 1]._id + 1;
    var userDetails = {...req.body, "_id": _id, "role": "user", "status": 0, "info": Date() };

    try {
        await UserSchemaModel.create(userDetails);
        res.status(201).json({ "status": true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ "status": false });
    }
};
