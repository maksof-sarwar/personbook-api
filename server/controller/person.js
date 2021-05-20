var Person = require('../model/person')
/** 
 * @api {get} /person/detail Get Person Details API
 * @apiSampleRequest off
 * 
 * @apiName Get Person Details API
 * @apiGroup Person
 *
 * @apiSuccess {string} status Status of the request.
 * @apiSuccess {string} message Message of the request.
 * @apiSuccess {object} data All person details
 */
exports.viewPerson =(req,res) => {
    Person.find()
    .select('_id name phoneNo')
    .then(result =>{
        res.status(200).json({status: "OK", message: "Success, result fetched successfully.", data: result});
    })
    .catch(err =>{
        res.status(500).json({message:err});
    });
    
};
/** 
 * @api {post} /person/insert  insert person Details API
 * @apiSampleRequest off
 * 
 * @apiName  insert person Details API
 * @apiGroup Person
 * 
 *
 * @apiParam {string} name      person Name
 * @apiParam {string} phoneNo   phone number
 * 
 *
 * @apiExample Sample Request Body:
 *  {
 *   "name"     : "zakir",
 *   "phoneNo"  : "0314" 
 *  }
 *
 * @apiSuccess {string} status Status of the request.
 * @apiSuccess {string} message Message of the request.
 */

exports.insertPerson = (req,res) => {
    const data = new Person({  
        name   :  req.body.name,
        phoneNo : req.body.phoneNo
    });
    data
    .save()
    .then(result => {
        res.status(200).json({statu: "OK", message: " Success, inserted successfully."});
    }).catch(err =>{
        console.log(err)
        res.status(500).json({message:err});
    })
};
/** 
 * @api {get} /person/:id   Find Person Details By ID API
 * @apiSampleRequest off
 * 
 * @apiName Find Person     Find Person Details By ID API
 * @apiGroup Person
 * 
 * @apiParam {object}       id      Person ID
 *
 * @apiSuccess {string}     status Status of the request.
 * @apiSuccess {string}     message Message of the request.
 * @apiSuccess {object}     data of person by specific ID
 */

exports.findPersonById = (req,res)=>{
    Person.findById(req.params.id)
    .exec()
    .then(result =>{
        (result)? res.status(200).json({status : "OK", message: "Success, result fetched successfully." , data:result}) 
        : res.status(404).json({message:"not found"})
    }).catch(err =>{
        res.status(500).json({message:err});
    });
}

/** 
 * @api {get} /person/del/:id   Delete Person Details By  API
 * @apiSampleRequest off
 * 
 * @apiName Delete Person       Delete Person Details By ID API
 * @apiGroup Person
 * 
 * @apiParam {object}           id              Person ID
 *
 * @apiSuccess {string}         status Status of the request.
 * @apiSuccess {string}         message Message of the request.
 */

exports.deletePerson = (req, res)=>{
    Person.findByIdAndRemove(req.params.id)
    .exec()
    .then(()=>{
        res.status(200).json({status : "OK",message: "Deleted Successfully"})
    }).catch(err =>{
        res.status(500).json({message:err});
    });
}