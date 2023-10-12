const fs = require('fs');


if (!fs.existsSync('./new')){
    fs.mkdir('./new', (err) => {
        if (err) throw err;
    
        console.log('Directory created')
    })
} else {
    console.log('directory exists!')
}


if (fs.existsSync('./new')){
    fs.rmdir('./new', (err) => {
        if (err) throw err;
    
        console.log('Directory removed')
    })
} else {
    console.log('directory doesnt exist!')
}