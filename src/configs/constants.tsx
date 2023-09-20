
let host = 'https://bizzebo.s3.amazonaws.com'; //prod
if(process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  host = 'https://bizzebo.s3.amazonaws.com'
}

export const constants = {
  imageHost: host,
  urlPath: '',
  imageUrl: host + ''
}
