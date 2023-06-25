import axios from 'axios'
const baseURl = process.env.NEXT_PUBLIC_API_URL

const fetching = async (method, path, databody) => {
  try {
    if (method === 'post') {
      const response = await axios({
        method: method,
        url: `${baseURl}${path}`,
        data: databody
      })
      return response
    }
    else if (method === "get") {
      const response = await axios({
        method: method,
        url: `${baseURl}${path}`,
      })
      return response
    }
  } catch (err) {
    return err
  }
}

export default fetching
