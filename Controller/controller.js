
const Details = require('../details');



 const Create = async(req,res,next) => {
        const details =  new Details({
            Name:req.body.Name,
            flavour:req.body.flavour,
            cost:req.body.cost
        });
        try {
        const saveddetails = await details.save();
        res.json({saveddetails});
        }catch(err){
            res.json({error});
        }
    }

const Read = async(req,res) =>{
    try{
        const details = await Details.find();
        res.json(details);
    }catch(err){
        res.json(err);
    }
}

const ReadById = async(req,res) =>{
    try{
        const details = await Details.findById(req.params.detailsId);
        res.json(details);
        }catch(err){
            res.json(err);
        }
} 


const Delete = async(req,res) => {
    try{
        const removedetails = await Details.findByIdAndDelete({_id: req.params.detailsId});
        res.json({deleteddata});
    }
    catch(err){
        res.json(err);
    }
}


const Change= async(req,res) => {
    try{
        const updatedetails = await Details.findByIdAndUpdate({_id: req.params.detailsId},{$set :{fullname: req.body.fullname,
            email: req.body.email,
            mobile: req.body.mobile,
            place: req.body.place}});
        res.json({changeddetails});
    }
    catch(err){
        res.json(err);
    };
    }



module.exports= {
    Read,
    Delete,
    Create,
    ReadById,
    Change
};