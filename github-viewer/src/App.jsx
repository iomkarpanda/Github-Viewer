import React from "react";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import ProfileCard from "./Components/ProfileCard";
import GitGraph from "./Components/GitGraph";


function App(){
  return(
    <div className="w-200 h-screen bg-zinc-300 flex flex-col items-center gap-4">
      <NavBar/>
      <SearchBar/>
      <ProfileCard/>
      <GitGraph/>
      
    </div>
  )
}


export default App;