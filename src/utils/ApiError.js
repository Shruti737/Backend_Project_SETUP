class ApiError extends Error{
         constructor(
            statusCode,
            message =  "Something went wrong",
            errors = [],
            stack = ""
         )
         {
          super(message)
          this.statusCode = statusCode
          //A stack trace is a detailed report of the function calls that led to the error. It helps developers trace back the origin of the error in the code. The stack property stores where the error happened.
          //Error.captureStackTrace ensures a detailed and accurate stack trace when an error is thrown.
          this.data = null
          this.messagec = message
          this.success = false
          this.errors = this.errors


          if(stack){
            this.stack = stack
          }
          else{
            Error.captureStackTrace(this, this.constructor)
          }
         }
}

export {ApiError}