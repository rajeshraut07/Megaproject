const express =require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");

const reveiwcontroller = require("../controllers/reviews.js");

//Reviews Post Route
router.post("/",isLoggedIn,validateReview, wrapAsync(reveiwcontroller.createReview));
   
    //Review Delete Route
    
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reveiwcontroller.destroyReview));


   
   module.exports = router;