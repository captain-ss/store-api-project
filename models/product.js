const mongoose =require('mongoose')

const productsSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,'product name must be provided']

    },
    price: {
        type:Number,
        required:[true,'price must be provided']
    },
    feature:
    {
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.5,
    },
    createdat:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            message:'{values} does not support',
        },
        // enum:['ikea','liddy','caressa','marcos'],
    }
})

module.exports=mongoose.model('product',productsSchema)