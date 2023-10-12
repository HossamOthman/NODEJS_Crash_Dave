const fsPromises = require('fs').promises;
const fs = require('fs');
const path = require('path');

const fileOps = async () => {
    try {

        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), ': niiiiice tomato');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseRenamed.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseRenamed.txt'), 'utf8');
        console.log(newData);

        // delete
        await fsPromises.unlink(path.join(__dirname, 'files', 'promiseRenamed.txt'));

    } catch (err) {
        console.error(err);
    }
}

fileOps();


/*
// path.join(__dirname, 'files', 'starter.txt') instead of './files/starter.txt'
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.toString())
})



// exit on uncought errors
process.on('uncaughtException', err => {
    console.error('there is an uncought error: ' + err);
    process.exit(1);
})
*/

/*
console.log('hello...')

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice tomato', (err) => {
    if (err) throw err;
    console.log('write complete');

        // also create file if it doesnt exist
        fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), ': Nice to meet you\n\n yes it is', (err) => {
        if (err) throw err;
        console.log('append complete')
        
            // rename in call back
            fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'replies.txt'), (err) => {
                if (err) throw err;
                console.log('rename complete')
            })
        })
})
*/
