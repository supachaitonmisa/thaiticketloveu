export const genarateResponse = (req, res) => {
    try {
        
        res.send({})
    } catch (error) {
        res.status(500).send(error) 
    }
}