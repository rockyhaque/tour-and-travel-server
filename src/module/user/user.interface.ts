export interface IUser {
  name: string
  age: number
  role: 'user' | 'admin'
  email: string
  photo?: string | null
  userStatus: 'active' | 'inactive'
}
