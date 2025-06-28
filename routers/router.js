const express = require('express');
const router = express.Router();



const {Read,Create,Delete,ReadById,Change} = require('../Controller/controller');

    

router.post('/detail',Create);

router.get('/detail',Read);
router.get('/detail/:detailsId',ReadById);
router.delete('/detail/:detailsId',Delete);
router.patch('/detail/:detailsId',Change);



module.exports = router;