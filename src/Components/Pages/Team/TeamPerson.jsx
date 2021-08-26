import React from "react";
const teams = [
  {
    id: 1,
    img: "1.jpg",
    name: "Emiley Philifs",
    designation: "Digital marketer",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
  },
  {
    id: 2,
    img: "2.jpg",
    name: "Emiley Philifs",
    designation: "Digital marketer",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
  },
  {
    id: 3,
    img: "3.jpg",
    name: "Emiley Philifs",
    designation: "Digital marketer",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
  },
  {
    id: 4,
    img: "4.jpg",
    name: "Emiley Philifs",
    designation: "Digital marketer",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
  },
  {
    id: 5,
    img: "5.jpg",
    name: "Emiley Philifs",
    designation: "Digital marketer",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
  },
  {
    id: 6,
    img: "6.jpg",
    name: "Emiley Philifs",
    designation: "Digital marketer",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
  },
  {
    id: 7,
    img: "7.jpg",
    name: "Emiley Philifs",
    designation: "Digital marketer",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
  },
  {
    id: 8,
    img: "8.jpg",
    name: "Emiley Philifs",
    designation: "Digital marketer",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
  },
];
const TeamPerson = () => {
  return (
    <>
      <div className="team-area de-padding">
        <div className="container">
          <div className="team-wpr grid-4">
            {teams.map((team, i) => (
              <div key={i} className="team-box">
                <div className="team-pic">
                  <img src={require(`./img/${team.img}`).default} alt="thumb" />
                  <ul className="team-social">
                    <li>
                      <a href={team.facebook} target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href={team.facebook} target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href={team.facebook} target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-desc">
                  <h5 className="fz-20-5">{team.name}</h5>
                  <span>{team.designation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPerson;
