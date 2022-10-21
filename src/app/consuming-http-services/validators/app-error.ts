
export class AppError {
  constructor(public originalError?: any) {
    console.log('Original Error: ',originalError)
  }
}