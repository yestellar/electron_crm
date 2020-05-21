import axios from 'axios'

const url = "api/users/"

class PostService {
  // Get Users
  static getUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data
        resolve(
          data.map(user => ({
            ...user,
            createdAt: new Date(user.createdAt)
          }))
        )
      } catch (err) {
        reject(err)
      }
    })
  }

  // Create Users
  static insertUser(text) {
    return axios.post(url, {
      text
    })
  }

  // Delete User
  static deleteUser(id) {
    return axios.delete(`${url}${id}`)
  }
}

export default PostService
