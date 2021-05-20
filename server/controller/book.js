var Person = require('../model/person')
var Book = require('../model/book');
/** 
 * @api {get} /book/detail       Get Book Details API
 * @apiSampleRequest off
 * 
 * @apiName  Get Book Details API
 * @apiGroup Book
 *
 * @apiSuccess {string} status Status of the request.
 * @apiSuccess {string} message Message of the request.
 * @apiSuccess {object} data all book details
 */
exports.viewBook = (req, res)=>{
    Book
    .find()
    .populate('personId')
    .select('name -_id')
    .then(result =>{
        res.status(200).json({status : "OK", message: "Success, result fetched successfully.", data: result});
    })
    .catch(err =>{
        res.status(500).json({message:err});
    });
},
/** 
 * @api {post} /book/insert     insert Book Details API
 * @apiSampleRequest off
 * 
 * @apiName  insert Book Details API
 * @apiGroup Book
 * 
 *
 * @apiParam {object} personId      person ID
 * @apiParam {string} name          Book Name
 * 
 *
 * @apiExample Sample Request Body:
 *  {
 *      "personId": "60364dd63d20a317d84ccf5f",
 *      "name": "child of curse"
 *  }
 *
 * @apiSuccess {string} status Status of the request.
 * @apiSuccess {string} message Message of the request.
 */

exports.insertBook = (req,res) =>{
    const data = new Book ({
        personId : req.body.personId,
        name : req.body.name
    });
    data
    .save ()
    .then (() =>{
        res.status(200).json({status: "OK", message: "inserted successfully"})
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message : err})
    });
},
/** 
 * @api {get} /book/id/:pId   Find Book By Person ID API
 * @apiSampleRequest off
 * 
 * @apiName  Find Book       Find Book By Person ID 
 * @apiGroup Book
 * 
 * @apiParam {object}       id      Person ID
 *
 * @apiSuccess {string}     status Status of the request.
 * @apiSuccess {string}     message Message of the request.
 * @apiSuccess {object}     data of book by specific person ID
 */

exports.findBookByPersonId = (req, res)=>{
    Book.find({personId: req.params.pId})
    .populate('person')
    .select('name _id')
    .then(result=>{
        res.status(200).json({status : "OK", message: "Success, result fetched successfully.", data:result});
    }).catch(err=>{
        res.status(500).json(err)
    })
}
/** 
 * @api {get} /book/pNo/:pNo    Find Book By Person Phonoe No API
 * @apiSampleRequest off
 * 
 * @apiName Find Book           Find Book By Person Phone No
 * @apiGroup Book
 * 
 * @apiParam {string}           pNo      Person Phone No
 *
 * @apiSuccess {string}         status Status of the request.
 * @apiSuccess {string}         message Message of the request.
 * @apiSuccess {object}         data of book by specific person phone No
 */

exports.findBookbyPhoneNo = async (req, res)=>{
    var data={phoneNo : req.params.pNo}
    var exsist=await Person.exists(data);
    if (exsist){
        Person.findOne(data, async (err, result)=>{
            if (err) throw err;
            else{
                var data = {personId: result._id}
                var exsist=await Book.exists(data);
                if (exsist){
                    Book
                    .find(data)
                    .then(result=>{
                        res.status(200).json({status : "OK", messager:"Success, result fetched successfully.",data:result});
                    }).catch(err=>{
                        res.status(500).json(err);
                    }) 
                }else{
                    res.status(404).json({message:"No book is assign to this id"});
                }
               
            }
        })
    }else {
        res.status(404).json({message:"id not found"});
    }
}
