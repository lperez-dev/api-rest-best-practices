const projectService = require('../services/project.service')

const getAllProjects = (req, res) => {
        projectService.getAllProjects()
        .then(e => res.status(200).send({status: 'Ok', data: e}))
        .catch(err => res.status(404).send({status: 'FAILED', message: err.message}))
    }

const getProject = async (req, res) => {
    const { id } = req.params

    if (id.length < 36 || id.length > 36) return res.status(400).send({status:'FAILED', message:'Id must be be an uuid request.'})

    try {
        const project =  await projectService.getProject(id)
        
        project !== null
        ? res.status(200).send({status: 'Ok', data: project})
        : res.status(404).send({status: 'FAILED', message: `Project does'nt exists`})
    } catch (err) {
        res.status(500).send({status: 'FAILED', message: err.message})
    }
}

const createProject =  async (req, res) => {
    try {
        const createdProject = await projectService.createProject(req.body)
        
        createdProject
        ? res.status(201).send({status: 'Ok', data: createdProject})
        : res.status(500).send({status: 'FAILED', message: `Couldn't create. The project already exists.`})
        
    } catch (err) {
        res.status(500).send({status: 'FAILED', message: err.message})
    }
}

const updateProject = async (req, res) => {
    const { id } = req.params

    if (id.length < 36 || id.length > 36) 
        return res.status(400).send({status:'FAILED', message:'Id must be be an uuid request.'})

    try {
        const updatedProject = await projectService.updateProject(id, req.body)
        
        updatedProject 
        ? res.status(202).send({ status: 'Ok', data: updatedProject})
        : res.status(500).send({ status: 'FAILED', message: 'Project not found.'})

    } catch (err) {
        res.status(500).send({ status: 'FAILED', message: err.message})
    }
}

const deleteProject = async (req, res) => {
    const { id } = req.params

    if (id.length < 36 || id.length > 36) 
    return res.status(400).send({status:'FAILED', message:'Id must be be an uuid request.'})

    try {
        const deletedProject =  await projectService.deleteProject(id, req.body)
        
        deletedProject
        ? res.status(200).send({status: 'Ok', data: deletedProject})
        : res.status(500).send({status: 'FAILED', message: 'Project not found.'})
    
    } catch (err) {
        res.status(500).send({status: 'FAILED', message: err.message})
    }
}

module.exports = {
    getAllProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
}