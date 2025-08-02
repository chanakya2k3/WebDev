const fs = require('fs')  // Importing File system library

function cleanfile(a) {
  // use the async readFile (no callback on readFileSync)
  fs.readFile(a, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
    } else {
      // write back the trimmed contents
      fs.writeFileSync(a, data.trim(), 'utf-8')
    }
  })
}

function random(resolve) {
  resolve()
}

let p = new Promise(random)

p.then(cleanfile(a))