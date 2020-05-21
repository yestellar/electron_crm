const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get Posts
router.get('/', async (req, res) => {
  const users = await loadPostsCollection()
  res.send(await users.find({}).toArray())
})

// Add Post
router.post('/', async (req, res) => {
  const users = await loadPostsCollection()
  await users.insertOne({
    text: req.body.text,
    createdAt: new Date()
  })
  res.status(201).send()
})


// Delete Post
router.delete('/:id', async (req, res) => {
  const users = await loadPostsCollection()
  await users.deleteOne({ _id: new mongodb.ObjectID(req.params.id) })
  res.status(200).send()
})

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://abc123:ddd123eee@wayup-0qahl.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
  })

  return client.db('wayup_system').collection('users')
}

module.exports = router
