const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)





const start = async () => {
    
    try {
        const first = await readFilePromise("./content/first.txt", 'utf8')
        const second = await readFilePromise("./content/second.txt", 'utf8')
        await writeFilePromise('./content/mind-grenade.txt', `THIS IS AWESOME ${first}. ${second}`)
        console.log(first, second)
    } catch (err) {
        
        console.log(err)
    }
    
}

start()
// const getText = (path) =>  {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, text) => {
//         if (err) {
//             reject(err)
//         }else if (text) {
//             resolve(text)
//         }
//       })
//     })
// }
// getText("./content/first.txt")
// .then((res) => console.log(res))
// .catch((err) => {
    //     console.log(err)
    // })