import axios from 'axios'


export default async (req, res) => {

  const postResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')

  //just get 20 posts
  const posts = postResponse.data

  return res.json(posts.slice(0, 20))
}