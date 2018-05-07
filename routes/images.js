const express = require('express');
const router = express.Router();

const Properties = require('../schemas/properties');
const Images = require('../schemas/images');
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config/s3_config.json');
var s3Bucket = new AWS.S3( { params: {Bucket: 'gallery-app-kari'} } )

router.get('/',  (req, res, next) => {
   
    Images.getImages((err, images)=>{
        if(err){
            console.log(err);
        }      
        else{
            console.log(images);
            res.json(images);
        }
    });
});

router.post('/upload',  (req, res, next) => {

   
    Properties.getProperties((err, properties) => {
        if(err){
           console.log(err);
           return res.json({success: false, msg: err});
        }
        else if(!properties){
            return res.json({success: false, msg: 'No properties!'});
        }
        else{
            let maxImageId = properties[0].maxImageId;
            let properties_id = properties[0]._id;
            maxImageId = +maxImageId + 1;            
            
            Properties.updMaxImageId(''+maxImageId, properties_id, (err, properties) => {
                if(err){
                    console.log(err);                  
                } else {
                    const imgUrl = 'https://s3.amazonaws.com/gallery-app-kari/'+maxImageId+'.jpg';
                    const image = new Images({
                        imageId: maxImageId,
                        imageName: req.body.imageName,
                        imagePath: imgUrl,
                        maintDt: Date.now() 
                    });

                    Images.addImage(image, (err, image)=>{
                        if(err){
                            console.log(err);
                        }
                        else
                        {
                            if(req.body.imageAvatar !== null && req.body.imageAvatar !==undefined){
                                if(req.body.imageAvatar.value !== undefined){
                                    const buf = new Buffer(req.body.imageAvatar.value.replace(/^data:image\/\w+;base64,/, ""),'base64')
                                    const params = {
                                        Key: ''+image.imageId+'.jpg', 
                                        Body: buf,
                                        ACL: 'public-read',
                                        ContentEncoding: 'base64',
                                        ContentType: 'image/jpeg'
                                    };
                                    
                                    s3Bucket.putObject(params, function(err, data){
                                        if (err) { 
                                            console.log(err);
                                            return res.json({success: false, msg: 'Failed to upload image. }'});
                                            
                                        } 
                                        else{
                                            res.json({success: true, msg: 'Image Uploaded to S3'});  
                                        }
                                        
                                    }); 
                                }                                 
                            } 
                        }
                    })
                }

            });


        }
    })
    
});

router.post('/deleteImage', (req, res, next) => {
    Images.deleteImage(req.body.imageId, (err, image) => {
        if(err){
            res.json({success: false, msg: err});
        } else {           
            const params = {               
                Key: ''+req.body.imageId+'.jpg', 
            };
            s3Bucket.deleteObject(params, function(err, data){
                if (err) { 
                    console.log(err);
                    return res.json({success: false, msg: err});                    
                } 
            });  
            res.json({success: true, msg: 'Image deleted from S3'});
        }

    });

    
})

module.exports = router;