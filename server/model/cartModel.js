import mongoose from "mongoose";

const cartModelSchema = mongoose.Schema({
    userId:{
        type: String
    },
    items:[{
        productId:{
            type: String
        },
        name:{type: String},
        quantity:{
            type:Number,
            required: true,
            min:[1, "cannot be less than 1"],
            default:1
        },
        price:Number
        
    }],
    bill:{
        type:Number,
        required: true,
        default:0
    }

});
const Cart= mongoose.model('Cart', cartModelSchema);
export default Cart;