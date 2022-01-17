require('dotenv').config()

const Product=require('./models/product')
const jsonProduct=require('./products.json')
const connectDB=require('./db/connect')


const start=async(req,res)=>{
    try {
    await  connectDB(process.env.MONGO_URI)
    // console.log('yippee');
    await  Product.deleteMany()
    await  Product.create(jsonProduct)
    process.exit(0)
    // console.log('success');
} catch (error) {
    console.log(error);
    process.exit(1)
    }
}

start()