const APIController = {
    alldata: async(req, res) => {
        try{
            return res.json({ Status: "Success get all data" })
        }
        catch(err){
            console.log(err)
        }
    }
};  

module.exports = APIController;