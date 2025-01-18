import multer from 'multer'
import path from 'path'
import config from '../config'
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname)
    const fileName =
      file.originalname
        .replace(fileExt, '')
        .toLowerCase()
        .split(' ')
        .join('-') +
      '-' +
      Date.now()
    //   console.log(fileName)
    cb(null, fileName + fileExt)
  },
})

export const upload = multer({ storage: storage })

//* Send Image To Cloudinary

// Configuration
cloudinary.config({
  cloud_name: config.cloudinary_api_name,
  api_key: config.cloudinary_api_key,
  api_secret: config.cloudinary_api_secret, // Click 'View API Keys' above to copy your API secret
})

export const sendImageCloudinary = (imageName: string, path: string) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      { public_id: imageName.trim() },
      (error, result) => {
        // remove multer img from local
        fs.unlinkSync(path)
        if (error) {
          reject(error)
        }
        resolve(result)
      }
    )
  })
}
