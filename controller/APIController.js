const path = require("path");
const fs = require('fs')

const APIController = {
    alldata: async(req, res) => {
        try{
            const sourceFile = path.join(__dirname, '../DataJson/api.json')
            fs.readFile(sourceFile, 'utf8', (err, data) => {
                if(err){
                    return res.json({ Error: "no Data found..."})
                }
                const jsondata = JSON.parse(data)

                return res.json({ Status: "Success", Result: jsondata })
            })
        }
        catch(err){
            console.log(err)
        }
    }
};  

module.exports = APIController;