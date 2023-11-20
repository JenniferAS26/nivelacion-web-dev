const BASE_URL = 'http://localhost:3000/users'

const fetchUsers = async () => {
  try {
    const { data } = await axios.get(BASE_URL)
    return data
  } catch (error) {
    console.warn(error)
  }
}

const fetchUserByParams = async ( params ) => {
  try {
    const { data } = await axios.get(BASE_URL, { params: params })
    return data
  } catch (error) {
    console.warn(error)
  }
}

const createUser = async ( body ) => {
  try {
    await axios.post(BASE_URL, body)
  } catch (error) {
    console.warn(error)
  }
}

export { fetchUsers, fetchUserByParams, createUser }