import Task from "../models/task.models.js";


export const getAllTask = async(req, res) => {
    try {
        
        const alltask = await Task.find({
            user: req.user.id,
        }).populate("user");
        res.status(200).json(alltask);
    } catch (error) {
        res.status(400)
        .json({message: "Error al buscar todas las tareas"})
    }

};


export const getTaskByID = async  (req, res) => {
 const { id } = req.params;
 
 try {
    const taskFound = await Task.findById(id);

    if(!taskFound) return res.status(404).json({message: "Tarea no encontrada"});

    res.status(200).json(taskFound);
 } catch (error) {
    res.status(400)
    .json({message: "Error al busca la tarea"})

 }
};

export const createTask = async(req, res) => {
    const { title, description, completed } = req.body

    try {
       const newTask = new Task({
            title,
            description,
            completed,
            user: req.user.id
        });
        const taskSaved = await newTask.save();
        res.status(200).json(taskSaved);
    } catch (error) {
      res.status(400).json({message: "Error al crear la tarea"});  
    }
};

export const updateTask = async(req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
        }).populate("user");
  
    if(!updatedTask)
     return res.status(404).json({ message: "Tarea no encontrada"}); 
    
    res.status(200).json(updatedTask);  
  } catch (error) {
    res.status(400).json({message: "Error al actualizar la tarea"});  
  }  
};

export const deleteTask = async(req, res) => {
    try {
      const deleteTask = await Task.findByIdAndDelete(req.params.id);
      
      if(!deleteTask)
      return  res.status(404).json({message: "Tarea no encontrada"}); 
      
      res.status(200).json({message: "Tarea eliminada"});  



    } catch (error) {
        res.status(400).json({message: "Error al eliminar la tarea"});  
    
    }
};
