//To access a DB.json:
// const Project = require('../database/json/data.acces')
//To access a Express DB:
const Project = require('../database/postgres/data.access')
//To access a mongo DB:
//const Project = require('../database/mongo/data.access')

const getAllProjects = () => {
    return Project.getAllProjects()
}
const getProject = (id) => {
    return Project.getProject(id)
}
const createProject = (body) => {
    return Project.createProject(body)
}
const updateProject = (id, body) => {
    return Project.updateProject(id, body)
}
const deleteProject = (id) => {
    return Project.deleteProject(id)
}

module.exports = {
    getAllProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
}