import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject(){
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: null
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

  function handleCancelAction(){
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined
      }
    })
  }

  let content;

  if (projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAction} />;
  } else if (projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar projects={projectState.projects} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
