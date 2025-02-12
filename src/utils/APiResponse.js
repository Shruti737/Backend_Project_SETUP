class ApiResponse{
    constructor(
        statusCode,
        data, 
        message = "Success"
    ){
          this.data = null
          this.messagec = message
          this.success = statusCode < 400
          this.errors = this.errors
    }
}