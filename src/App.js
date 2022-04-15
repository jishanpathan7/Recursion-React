import React, {useState} from "react";
import "./style.css";
import Folder from "./Components/Folder.js";
import explorer from "./Data/folderData";

export default function App() {

  
  return (
    <>
    <div>
  <Folder explorer={explorer}/>
  </div>
     </>
  );
}
