import mongoose from "mongoose";
import Joi from "joi";

const userShema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, requred: true },
    password: { type: String, requred: true },
    id: { type: String },
    role: {
        type: String,
        default: 'basic',
        enum: ["basic", "admin", "supervisor"]
    },
    created: { type: Date, default: Date.now },
});

// userShema.methods.joivalidate = function(obj) {
//     var schema = {
// 		name: Joi.types.String().min(12).max(30).required(),
// 		password: Joi.types.String().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
// 		email: Joi.types.String().email().required(),
// 		created: Joi.types.Date(),
// 	}
//     return Joi.validate(obj, schema);
// }


const User = mongoose.model('User', userShema);
export default User;
