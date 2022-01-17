const getAllProductsStatic= async(req,res)=>{
    throw new error('testing async error')
res.status(200).json({messge:'product testing route'})
}
const getAllProducts= async(req,res)=>{
res.status(200).json({messge:'product  route'})
}
module.exports={
    getAllProductsStatic,
    getAllProducts,
}