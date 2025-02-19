
const asyncHandler = (requestHandler) =>{
    return (req, resp, next)=>{
        Promise.resolve(requestHandler(req, resp, next))
        .catch((err)=> next(err));
        //console.log("asyncHandler");
 };
};

export {asyncHandler};