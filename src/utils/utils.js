/* eslint-disable no-plusplus */

const lerp = (a, b, n) => (1 - n) * a + n * b

const getMousePos = (e) => ({
  x: e.clientX,
  y: e.clientY,
})

const getRandomString = (length) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

const getRandomChar = () => {
  const possible =
    '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' +
    '0123456789' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz'
  return possible.charAt(Math.floor(Math.random() * possible.length))
}

export { lerp, getMousePos, getRandomString, getRandomChar }
