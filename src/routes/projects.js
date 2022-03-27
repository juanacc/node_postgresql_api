const { Router } = require('express');
const router = Router();
const { createProject, getProjects, getOneProject, deleteProject } = require('../controllers/project.controller');

router.post('/', createProject);
router.get('/', getProjects);
router.get('/:id', getOneProject);
router.delete('/:id', deleteProject);

module.exports = router;
