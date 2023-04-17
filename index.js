const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get(
  '/randomNumber',
  (req, res) => {

    const num = () => {
      const min = 1
      const max = 9
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    res.json({
      num: num()
    });
  }
);

app.listen(8090, () => {
  console.log('Server running on port 8090');
});

// 0x51aef3f04920d8cb

// PRIVATE_KEY='0xe1309041e699f896a5b2e0d26b1b94287da7b33e15a2cc414fd6594cc0b41884'
//
// Your account address:  0x75f28E46e2E9e1ef34e303F909f21cA9326BCb46
