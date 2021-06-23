const get = jest.fn()
const post = jest.fn()
const reset = () => {
  get.mockReset()
  post.mockReset()
}

module.exports = {
  get, post, reset
}