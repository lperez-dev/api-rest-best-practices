const { v4: uuidv4} = require('uuid')
const DB = require("./db.json")
const { saveToDatabase } = require("./utils")

const getAllProjects = () => {
  return DB.projects
};

const createProject = (body) => {
  const isAlreadyAdded =
    DB.projects.findIndex((project) => project.name === body.name) > -1
  
  if (isAlreadyAdded) return 0

  const projectToInsert = {
    ...body,
    id: uuidv4(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  }

  DB.projects.push(projectToInsert)
  saveToDatabase(DB)
  return projectToInsert
}

const getProject = (id) => {
  const project = DB.projects.find(e => e.id === id)
  return project ? project : 0
}

const updateProject = (id, {name, priority, description}) => {
  const projectExists =  DB.projects.find(e => e.id === id)
  
  if (projectExists) {
    projectExists.name = name
    projectExists.priority = priority
    projectExists.description = description
    projectExists.updatedAt = new Date().toLocaleString('en-US', { timeZone: 'UTC' })
    return projectExists
  } else {
    return 0
  }
}

const deletedProject = () => {

}

module.exports = { getAllProjects, getProject, createProject, updateProject, deletedProject }