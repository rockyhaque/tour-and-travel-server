import { model, Schema } from 'mongoose'
import { IUser } from './user.interface'
import bcrypt from 'bcrypt'
import config from '../../config'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    minlength: 3,
    maxlength: 50,
  },
  // age: {
  //   type: Number,
  //   required: [true, "Please enter your ege"],
  // },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
      },
      message: '{VALUE} is not a valid email',
    },
    immutable: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide your password'],
    select: false // hide password from select query [applied when hash]

  },
  photo: String,
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: '{VALUES} is not valid. Please provide your valid role',
    },
    default: 'user',
    required: true,
  },
  userStatus: {
    type: String,
    enum: ['active', 'inactive'],
    required: true,
    default: 'active',
  },
})

// hook -> pre
// userSchema.pre("find", function(this, next){
//   this.find({userStatus: {$ne: "active"}})
//   next()
// })

// hook - post
// userSchema.post("find", function(docs, next){
//   docs.forEach((doc: IUser) => {
//     doc.name = doc.name.toUpperCase()
//   })
//   next()
// })

//* hashing password
userSchema.pre('save', async function(next){
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds))
  next()
})

userSchema.post('save', function(doc, next){
  doc.password = '';
  next()
})



const User = model<IUser>('User', userSchema)

export default User
