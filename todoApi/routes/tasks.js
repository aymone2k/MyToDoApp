const express = require('express');

const router = express.Router();


const { getTasks, getTask, createTask, deleteTask , updateTask} = require('../controllers/tasks.js')




router.get('/', getTasks);// retourne les tasks
router.post('/', createTask); // créer une task
router.get('/:id', getTask); //reccup une task par son id
router.delete('/:id', deleteTask);// supprime une task
router.patch('/:id', updateTask);//modifie


module.exports = router;