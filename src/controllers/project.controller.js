const Project = require('../models/Project');
//const Task = require('../models/Task');

const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json({
            data: projects
        })
    } catch (error) {
        console.log(error);
    }
};

const getOneProject = async (req, res) => {
    const id = req.params.id;
    const project = await Project.findOne({
        where: {
            id
        }
    });
    res.json({
        data: project
    })
};

const createProject = async (req, res) => {
    console.log(req.body);
    const { name, priority, description, deliverydate } = req.body;
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });
        console.log(newProject);
        if (newProject) {
            return res.json({
                message: 'New Project created',
                data: newProject
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something Goes Wrong. Try Again.',
            data: {},
        })
    }
    res.json('recibido');
};

const deleteProject = async (req, res) => {
    const id = req.params.id;
    const deleteRowCounts = await Project.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Project deleted succesfully',
        count: deleteRowCounts
    })
}

module.exports = {
    createProject,
    getProjects,
    getOneProject,
    deleteProject,
}