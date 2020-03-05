const orm = require("../connection/ORM.js")

const burger = {

    all:function(cb){
        orm.all("burgers",function(res){
            cb(res)
        })
    },
    create:function(name, cb){

        orm.create("burgers",[
            "burger_name","devoured"
        ],[
            name,false
        ],cb)
     }, 

     update:function(id, cb){
         const value = "id =" + id;
         orm.update("burgers",{
             devoured:true
         },value,cb)
     }
}
module.exports=burger