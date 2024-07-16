import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";
import SelectedProjects from "./components/SelectedProjects";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleStartAddProject(){
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: null
      }
    })
  }

  function handleCancelAction(){
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined
      }
    })
  }

  function handleAddProject(projectDetails){
    setProjectState(prevProjectState => {

      const newProject = {
        ...projectDetails,
        id: Math.random()
      }

      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: [...prevProjectState.projects, newProject]
      }
    })
  }

  function handleSelectProject(id){
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: id
      }
    })
  }

  function handleProjectDeletion(){
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: prevProjectState.projects.filter(project => project.id !== prevProjectState.selectedProjectId)
      }
    })
  }

  function handleAddTask(inputText){
    setProjectState(prevProjectState => {

      const newTask = {
        text: inputText,
        id: Math.random(),
        projectId: prevProjectState.selectedProjectId
      }

      return {
        ...prevProjectState,
        tasks: [newTask, ...prevProjectState.tasks]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        tasks: prevProjectState.tasks.filter(task => task.id !== id)
      }
    })
  }
   
  // Find the project that was selected in the array of projects using the set selected projectID
  // in the state object projectState
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

  let content = <SelectedProjects 
                project={selectedProject} 
                onDelete={handleProjectDeletion} 
                onAddTask={handleAddTask}
                onDeleteTask={handleDeleteTask}
                tasks={projectState.tasks}
                />;

  // set the selected Project ID not null or undefined to determine which component is rendered
  if (projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAction} />;
  } else if (projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar 
        projects={projectState.projects} 
        onStartAddProject={handleStartAddProject} 
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
        />
      {content}
    </main>
  );
}

export default App;
