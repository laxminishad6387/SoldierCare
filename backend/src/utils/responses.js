// import { StatusCodes } from 'http-status-codes';
// export const errorResponse = (error, res)=>{
//     console.log( error);
//             if(error.status){
//                 return res.status(error.status).json({
//                     message: error.message,
//                     success: false
//                 });
//             }
//             return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//             message: "Internal Server Error",
//             success: false,
//             error: error.message
//             }); 
// }

// export const successResponse = (res, message, data) => {
//     return res.status(StatusCodes.OK).json({
//         success: true,
//         message,
//         data
//     });    
// }