import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeOneAchievement from "./HomeOneAchievement";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/HomeAchievements.css";
function HomeAchievements() {
  const achievements = [
    {
      header: "Organization",
      desc1: "We collaborated with",
      desc2: "organizations",
      count: 10,
      color: "AliceBlue",
      textcolor : "DarkBlue"
    },
    {
      header: "Projects",
      desc1: "We helped to",
      desc2: "projects",
      count: 80,
      color: "AntiqueWhite",
      textcolor : "GoldenRod"
    },
    {
      header: "Issues",
      desc1: "We made to solve",
      desc2: "issues",
      count: 500,
      color: "HoneyDew",
      textcolor : "ForestGreen"
    },
    {
      header: "Users",
      desc1: "Trusted by",
      desc2: "users",
      count: 300,
      color: "MistyRose",
      textcolor : "PaleVioletRed"
    },
  ];

  return (
    <Container id="achievements"> 
      <h2 className="heading1">Achievements</h2>
      <Row md={4}>
        {/* <Col className='achieve'>1 of 3</Col>
        <Col className='achieve'>2 of 3</Col>
        <Col className='achieve'>2 of 3</Col> */}
        {achievements.map((achieve, index) => (
          <Col className="achieve" key={index}>
            <HomeOneAchievement achieve={achieve} index={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeAchievements;

// import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import HomeOneAchievement from "./HomeOneAchievement";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles/HomeAchievements.css";

// function HomeAchievements() {
//   const [achievements, setAchievements] = useState([
//     {
//       header: "Organization",
//       desc1: "We collaborated with",
//       desc2: "organizations",
//       count: 10,
//       color: "AliceBlue",
//       textcolor: "DarkBlue",
//     },
//     {
//       header: "Projects",
//       desc1: "We helped to",
//       desc2: "projects",
//       count: 80,
//       color: "AntiqueWhite",
//       textcolor: "GoldenRod",
//     },
//     {
//       header: "Issues",
//       desc1: "We made to solve",
//       desc2: "issues",
//       count: 5, // Initial count of issues
//       color: "HoneyDew",
//       textcolor: "ForestGreen",
//     },
//     {
//       header: "Users",
//       desc1: "Trusted by",
//       desc2: "users",
//       count: 300,
//       color: "MistyRose",
//       textcolor: "PaleVioletRed",
//     },
//   ]);

//   // const updateIssueCount = () => {
//   //   // Update the count of issues directly
//   //   const newAchievements = [...achievements];
//   //   newAchievements[2].count += 1; // Assuming index 2 is for issues
//   //   setAchievements(newAchievements);
//   // };

//   return (
//     <Container id="achievements">
//       <h2 className="heading1">Achievements</h2>
//       <Row md={4}>
//         {achievements.map((achieve, index) => (
//           <Col className="achieve" key={index}>
//             <HomeOneAchievement achieve={achieve} index={index} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default HomeAchievements;


