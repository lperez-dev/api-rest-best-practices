const Project = require('./models/Project')

const getAllProjects = () => {
    return Project.findAll()    
}

const getProject = (id) => {    
    return Project.findByPk(id)
}

const createProject = (body) => {
    return Project.create(body)
}

const updateProject = async (id, body) => {
    const projectExists = await Project.findByPk(id)
    
    if (projectExists) {
        projectExists.update( 
            body, 
            { where: { id } }
        )
        return projectExists.save()
    }
}

const deleteProject = async (id) => {
    const projectExists = await Project.findByPk(id)

    if (projectExists) {
        Project.destroy({
            where: { id }
        })
        return projectExists
    }
}

module.exports = {
    getAllProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
}