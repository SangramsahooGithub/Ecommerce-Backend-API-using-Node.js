const route = require("express").Router();
const productCtrl = require("../controller/ProductCtrl");
const auth=require('../middleware/auth');
const authAdmin=require('../middleware/authAdmin')

route.get("/product", productCtrl.getAll);
route.get("/product/:id", productCtrl.getSingle);


route.post("/product",auth,authAdmin, productCtrl.create);
route.put("/product/:id",auth,authAdmin, productCtrl.update);
route.delete("/product/:id",auth,authAdmin, productCtrl.delete);


module.exports=route;