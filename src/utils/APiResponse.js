class ApiResponse{
    constructor(
        statusCode,
        data , 
        message = "Success"
    ){
          this.data = data
          this.messagec = message
          this.success = statusCode < 400
          this.errors = this.errors
    }
}

export {ApiResponse};