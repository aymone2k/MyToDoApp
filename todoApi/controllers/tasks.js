const Task = require('../models/task');
const express = require('express');
const mongoose = require('mongoose');

exports.getTasks = async(req, res)=>{
  try{
    const tasks = await Task.find();
     res.status(200).json(tasks)
  }catch(error){
    res.status(404).json({message: error.message})
  }
}

exports.getTask = async (req, res)=>{
    try{
    const task = await Task.findOne({ _id: req.params.id });
    res.status(200).json(task)
  } catch (error) {
    res.status(404).json({ message: error.message });
}
}

exports.createTask = async (req, res)=>{

  const newTask = new Task({
          ...req.body
        });
    try{
      await newTask.save()
      res.status(201).json({newTask})
    }catch(error){res.status(409).json({ message: error.message }) };

}

exports.deleteTask = async (req, res)=>{
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`nous n'avont pas trouvé la note N°: ${id}`);

    

    await Task.findByIdAndRemove(id);

    res.json({message:"note supprimée"});
}

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { done } = req.body;
  const updatedTask = {done, _id: id };

  await Task.findByIdAndUpdate(id, updatedTask, { new: true });

  res.json(updatedTask);
}