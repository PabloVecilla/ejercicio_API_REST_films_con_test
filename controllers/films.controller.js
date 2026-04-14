const fetchFilm = require("../utils/fetchFilms")

const getFilm = async (req, res) => {
    const title =  req.params.title; 
    try {
        const data = await fetchFilm(title); 

        if (!data) return res.status(404).json({ message: "Film not found" }); 
         /*res.status(404).json({ message: "Film not found" });  */
        return res.status(200).json(data); 
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" })
    }
}; 

const createFilm = (req, res) => {
    const title = req.body.Title; 
    
    if (!title) return res.status(400).json({ message: "Invalid title" }); 

    return res.status(200).json({ message: `Se ha guardado ${title}` }); 
}; 

const updateFilm = (req, res) => {
    const id = req.body.id; 
    const title = req.body.Title; 

    if (id === undefined || id === null || !title) return res.status(400).json({ message: "Please insert id and title" });

    return res.status(200).json({ id, 
                                message: `Se ha actualizado ${title}` }); 
}

const deleteFilm = (req, res) => {
    const id = req.body.id; 

    if (id === undefined || id === null) return res.status(400).json(
        { message:  "Please insert id" }); 
    
    return res.status(200).json({ id, 
        message: `Se ha borrado la película con ID: ${id}` }); 
}

module.exports = {
    getFilm, 
    createFilm, 
    updateFilm, 
    deleteFilm
}; 