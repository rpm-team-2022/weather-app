import React from "react";
import './about.css'


const About = () => {
  const team = [
    {
      id: 1,
      name: 'Peter Rizek',
      role: 'UI/UX design',
      Tools : 'Bootstrab 5 & CSS',
      descr : 'Designing the UI and UX for the weather app',
      Githublink: 'https://github.com/PeterRizek009',
      linkein :  'https://www.linkedin.com/in/peter-rezik-a84408123/'
    },
    {
      id: 2,
      name: 'Ramy Metry',
      role: 'Backend Development',
      Tools : 'SQL  & Node JS',
      descr : 'Builded the database and Build the authentication. ',
      Githublink: 'https://github.com/',
      linkein :'https://www.linkedin.com/in/ramy-metry-090914172/'
    },
    {
      id: 2,
      name: 'Mina Mikhael',
      role: 'Front End Development',
      Tools : 'React JS',
      descr : 'Builded the login , search . search history comonents',
      Githublink: 'https://github.com/mina-mikhael',
      linkein :'https://www.linkedin.com/in/mina-s-mikhael'

    },
  ]

  return (
    <div>
      <div className="text-center">
        <h3 className="mb-4 about-title"><span>Team </span> memebers <span>and </span> Roles</h3>
      </div>
      <div className="row d-flex justify-content-center">
        {team.map((el) => {
          return (
            <div className="card about col-lg-3 col-md-6 m-5 py-2 text-center" key={el.id}>
              <div className="card border-0 shadow-lg pt-2 my-1 position-relative">
              <div className="card-body crdbody">
                <div className="card-text">
                <h5 className="card-title text-secondary pb-3">{el.name}</h5>
                <p className="card-text  pb-1">{el.role}</p>
                <p className="card-text">{el.Tools}</p>
                <p className="card-text ">{el.descr}</p>
                </div>
                <div className="card-footer myfooter  border-0 text-center">
                  <ul className="social-list list-inline mb-0 mx-5">
                    <li className="list-inline-item"><a className="text-dark" href={el.linkein}> <i className="fab fa-linkedin-in fa-fw"></i></a></li>
                    <li className="list-inline-item"><a className="text-dark" href={el.Githublink}> <i className="fab fa-github fa-fw"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default About;
