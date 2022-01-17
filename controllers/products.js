
// const product = require('../models/product')
const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    

    const products = await Product.find({
        
        
    }).select('company')
    res.status(200).json({ products, nbhits: products.length })
}
const getAllProducts = async (req, res) => {

    const { featured, company, name, sort, fields } = req.query

    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = { $regex: company, $options: 'i' }
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }
    console.log(queryObject);

    let result = Product.find(queryObject)
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
    else {
        result = result.sort('createdAt')
    }
    if (fields) {
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }
    const products = await result

    res.status(200).json({ products, nbhits: products.length })
}


module.exports = {
    getAllProductsStatic,
    getAllProducts,
}