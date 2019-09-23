import React, {Component} from 'react';
import Prism from 'prismjs';
import 'prismjs/plugins/autolinker/prism-autolinker.min.js';
import './AboutMe.scss';

//code_x - text variables. They've been split to allow me to insert code parts that have executable code
const code_1 = `
/* 
Hi, It's me, Alexander (DaGuT) Mongolin!

You are about to read about me, so enjoy "code" :)

It's normal and executable code, btw.
*/

const DaGuT = {
    fullName: "Alexander Mongolin",
    nationality: "Russian + Portugese residence",
    phoneNumber: "Hidden",
    email: "`

const code_2 = `",
    webPage: "https://dagut.ru",
    gitHub:"https://github.com/DaGuT",
    linkedIn: "https://www.linkedin.com/in/alexander-mongolin-314046168/",
    adress: "Portugal, Lisboa, hidden"
};

DaGuT.summary = \`
    -Front-end web developer, that is capable of working on Full-stack projects (preferably, Node.JS for backend)
    -Knowledge of Vanila js, node.js, React, Vue and many more frameworks/tools.
    -Fast learner. Can dive into any new framework within short time-range, and even write my own additions (in case if necessary).
    -Have mathematical background and analytical mindset
    -Dream about becoming great front-ender and am very passionate about it. 
    -Have a lot of experience with data science
\`;

DaGuT.jobRelatedSkills = [
    "JS (up to ES9)",   "Web Site Design",
    "React",            "MS Office tools",
    "Webpack",          "HTML5",
    "Redux",            "Node.js",
    "jQuery",           "SASS",
    "Bootstrap",        "CSS3",
    "Socket.io",        "Wordpress",
    "GIT",              "Machine Learning",
    "p5.js",            "Python",
    "REST",             "Keras"
];

DaGuT.additionalSkills = [
    "Self-educative",               "Team building",
    "Creative thinking",            "Task planning",
    "Critical thinking",            "Dispute Resolution",
    "Diplomacy",                    "Creative thinking",
    "Collaboration skills",         "Analytical mindset",
    "Good team-leading skills"
];

const AlexanderMongolin = DaGuT; //renaming

class Education {
   constructor(universityName, degree, speciality, graduationYear, averageGrade) {
        this.universityName = universityName;
        this.degree = degree;
        this.speciality = speciality;
        this.graduationYear = graduationYear;
        this.averageGrade = averageGrade;
   } 
}

AlexanderMongolin.education = [
    //grades are rated between 2 and 5, 5 is excellent
    new Education("NOVA IMS", "PhD", "Information Management with specialization in IT", 2022, NaN),
    new Education("Tomsk Polytechnic University", "Master", "Applied mathematics and informatics", 2018, 5),
    new Education("NOVA IMS", "Exchange", undefined ,2017, 5),
    new Education("Tomsk State University","Bachelor","Mathematics and computer sciences", 2016, 5)
].sort((a,b) => a.graduationYear - b.graduationYear); //resort, so that latest in array is latest in my life
`

export default class AboutMe extends Component {
  constructor() {
      super();

      //ref to clearly know what span we need to change to make email visible
      this.emailRef = React.createRef();

      //standard react binds
      this.revealEmail = this.revealEmail.bind(this);
  }

  
  componentDidMount() {
    //activating Prism
    Prism.plugins.Autolinker = true;
    Prism.highlightAll();
  }

  //function that will be executed upon click at (...)
  revealEmail() {
      this.emailRef.current.innerHTML = '<a class="token url-link" href="emailto:mangustalex11@gmail.com">mangustalex11@gmail.com</a>';
  }

  render() {
    return (
      <div className="container">
        <code className="language-javascript line-break">
          {code_1}
        </code>
        <span ref={this.emailRef} onClick={this.revealEmail} className="token url-link cursor-pointer">(click to reveal)</span>
        <code className="language-javascript line-break">
          {code_2}
        </code>
      </div>
    )
  }
}
