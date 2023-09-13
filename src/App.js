import React, { useState } from "react";
import "./App.css";

import TabItem from "./components/TabItem";
import ProjectItem from "./components/ProjectItem";
import Header from "./components/Header";

let tabsList = [
  { tabId: "STATIC", displayText: "Static" },
  { tabId: "RESPONSIVE", displayText: "Repsonsive" },
  { tabId: "DYNAMIC", displayText: "Dynamic" },
];

let projectsList = [
  {
    projectId: 0,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s3-img.png",
    title: "Music Page",
    description:
      "The music page enables the users to browse through the images of all-time favorite music albums.",
  },
  {
    projectId: 1,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
    title: "Tourism Website",
    description:
      "The user can browse through photographs of well-known locations on a tourism website.",
  },
  {
    projectId: 2,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s1-img.png",
    title: "Advanced Technologies",
    description:
      "A website that provides you with a fundamental knowledge of advanced technologies.",
  },
  {
    projectId: 3,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s2-img.png",
    title: "Happy Meals",
    description: "Explore the top cuisines at more than 1,000 restaurants.",
  },
  {
    projectId: 4,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r4-img.png",
    title: "VR Website",
    description:
      "Users can explore AR and VR products as well as current industry events on VR websites.",
  },
  {
    projectId: 5,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
    title: "Food Munch",
    description:
      "A user-focused food technology website is the Food Much Website.",
  },
  {
    projectId: 6,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r3-img.png",
    title: "Portfolio",
    description:
      "The ideal substitute for a CV to display your skills to the online community is a portfolio.",
  },
  {
    projectId: 7,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r1-img.png",
    title: "Design",
    description:
      "A website that highlights the Design tools best qualities and provides more details.",
  },
  {
    projectId: 8,
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d3-img.png",
    title: "Speed Typing Test",
    description:
      "The speed typing test application can estimate how long it will take to type the chosen quote.",
  },
  {
    projectId: 9,
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d1-img.png",
    title: "Random Joke Page",
    description:
      "A new joke is generated via the dynamic API-based web application known as Random Joke Page.",
  },
  {
    projectId: 10,
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d2-img.png",
    title: "Sizing An Image",
    description:
      "This dynamic web application uses DOM techniques to change the size of an element.",
  },
];
const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId);

  const clickTabItem = (tabValue) => {
    setActiveTabId(tabValue);
  };
  const getFilteredProjects = () => {
    const filteredProjects = projectsList.filter(
      (eachprojectDetails) => eachprojectDetails.category === activeTabId
    );
    return filteredProjects;
  };
  const filteredProjects = getFilteredProjects();
  return (
    <div className="app-container">
      <Header />
      <h1 className="title">Projects</h1>
      <p className="description">
        Your skills and achievements showcase your strengths and abilities.
        Speak about any new skills or software you learnt to perform the project
        responsibilities.
      </p>

      <ul className="tabs-container">
        {tabsList.map((tabDetails) => (
          <TabItem
            key={tabDetails.tabId}
            tabDetails={tabDetails}
            clickTabItem={clickTabItem}
            isActive={activeTabId === tabDetails.tabId}
          />
        ))}
      </ul>

      <ul className="project-list-container">
        {filteredProjects.map((projectDetails) => (
          <ProjectItem
            key={projectDetails.projectId}
            projectDetails={projectDetails}
          />
        ))}
      </ul>
    </div>
  );
};
export default App;



// class App extends Component {
//   state = {
//     activeTabId: tabsList[0].tabId,
//   }

//   clickTabItem = tabValue => {
//     this.setState({activeTabId: tabValue})
//   }

//   getFilteredProjects = () => {
//     const {activeTabId} = this.state
//     const filteredProjects = projectsList.filter(
//       eachprojectDetails => eachprojectDetails.category === activeTabId,
//     )
//     return filteredProjects
//   }

//   render() {
//     const {activeTabId} = this.state
//     const filteredProjects = this.getFilteredProjects()
//     return (
//       <div className="app-container">
//         <Header />
//         <h1 className="title">Projects</h1>
//         <p className="description">
//           Your skills and achievements showcase your strengths and abilities.
//           Speak about any new skills or software you learnt to perform the
//           project responsibilities.
//         </p>

//         <ul className="tabs-container">
//           {tabsList.map(tabDetails => (
//             <TabItem
//               key={tabDetails.tabId}
//               tabDetails={tabDetails}
//               clickTabItem={this.clickTabItem}
//               isActive={activeTabId === tabDetails.tabId}
//             />
//           ))}
//         </ul>

//         <ul className="project-list-container">
//           {filteredProjects.map(projectDetails => (
//             <ProjectItem
//               key={projectDetails.projectId}
//               projectDetails={projectDetails}
//             />
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// export default App