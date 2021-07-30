const express = require('express')
const router = express.Router()
const StudentsProfile = require('../models/students')

router.get('/insert', async (req, res) => {
    try {
        // console.log(topusers)
        const insert = await new StudentsProfile({
            name: 'Abhishek',
            contact: '9876543112',
            socities: ['dance', 'drama', 'sing'],
            subjects:['hindi','english','maths'],
            class:'12'
        }).save()
        if (insert) {
            console.log(insert)
        res.status(200).json({msg:'success' })
            
        }
        else {
        res.status(500).json({msg:'An error occurred'})
            
}
    }
    catch (e) {
        console.log(e)
        res.status(500).json({msg:'An error occurred'})
        
    }
})



module.exports = router