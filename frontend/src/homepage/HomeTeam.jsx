import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeMember from "./HomeMember";
function HomeTeam() {
  const members = [
    {
      image: `${process.env.PUBLIC_URL}/images/Abhishek.jpeg`,
      name: "Abhishek Rao",
      role: "Backend Developer",
      desc: "I learnt a lot from this project about MERN STACK",
      insta : "https://www.instagram.com/abhishek._.0302/",
      github : "https://github.com/Madavaneni4546",
      linkedin : "https://www.linkedin.com/in/madavaneni-abhishek-rao-955b46242/",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/Chandu.jpeg`,
      name: "Chandra Shekar Reddy",
      role: "Full Stack Developer",
      desc: "I upskilled myself on MERN Stack with this project",
      insta : "https://www.instagram.com/chandu_pingili/",
      github : "https://github.com/ChanduPingili",
      linkedin : "https://www.linkedin.com/in/chandra-shekar-reddy-pingili-004275257/",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/Meena.jpeg`,
      name: "Meena",
      role: "Backend Developer",
      desc: "Feeling great to work on this project",
      insta : "https://www.instagram.com/meeenzzzzz/",
      github : "https://github.com/meenakudapu",
      linkedin : "https://www.linkedin.com/in/meena-kudapu/",
    },
  ];

  return (
    <div style={{marginTop : "20px"}} id="our-team">
      <h2 className="heading1">Our Team</h2>
      <CardGroup style={{ width: "80%", marginLeft: "10%" }}>
        {members.map((member) => (
          <HomeMember member={member} />
        ))}
      </CardGroup>
    </div>
  );
}

export default HomeTeam;
