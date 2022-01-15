import mongoose from "mongoose";

const LipaNaMPesaSchema = mongoose.Schema({
    PhoneNumber: {
        type: String,
        required: true
    },
    Amount: {
        type: String,
        required: true
    },
    AccountReference: {
        type: String,
        required: true
    },
    MerchantRequestID: {
        type: String,
        required: true
    },
    CheckoutRequestID: {
        type: String,
        required: true
    },
    ResponseCode: {
        type: Number,
        required: true
    },
    ResponseDescription: {
        type: String,
        required: true
    },
    CustomerMessage: {
        type: String,
        required: true
    },
    Completness: {
        type: String,
        default: "pending"
    },
    CallbackMetadata: {
        type: Array,
        default: "pending",
        required: false
    },
    Date: {
        type: Date,
        default: Date.now()
    }
},
    
); 

const Payment = mongoose.model('Payment', LipaNaMPesaSchema);
export default Payment;
