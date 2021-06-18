import React from "react";
import AllPagesPDFViewer from "../components/PDF/all-pages";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/



function Skill() {
  return (
    <div className="Resume">
      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={"https://drive.google.com/file/d/1zmJaGVMgNYjX-ToCFSBRtp29Tt3Q_X_i/view?usp=sharing"} />
      </div>

      <hr />
    </div>
  );
}

export default Skill;