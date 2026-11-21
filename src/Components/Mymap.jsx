import React from "react"
import i1 from "../images/1.webp"
import i2 from "../images/2.webp"
import i3 from "../images/3.webp"
import i4 from "../images/4.webp"
import i5 from "../images/5.webp"
import i6 from "../images/6.webp"
import i7 from "../images/7.webp"
import i8 from "../images/8.webp"
import i9 from "../images/9.webp"




// const courses = ["Web Developer", "Graphic", "Web Desginer", "Python", "Java", "C++"]
const courses = [
    {
        image: i1,
        title: "Advanced Diploma in Computer Application (ADCA)",
        description: "Learn Windows, MS Office, Google Workspace, Accounting and TallyPrime with GST."
    },
    {
        image: i2,
        title: "Full Stack Development",
        description: "Build and deploy complete web apps with HTML, CSS, JavaScript, React, Node.js and more."
    },
    {
        image: i3,
        title: "Diploma in Graphics and Web Designing",
        description: "Learn Photoshop, Illustrator, Figma, HTML/CSS and WordPress for graphics & web design."
    },
    {
        image: i4,
        title: "Diploma in Data Analytics",
        description: "Master Excel, SQL, Python, Power BI and Tableau for data-driven business decisions.."
    },
    {
        image: i5,
        title: "Diploma in Web & Programming (DWP)",
        description: "Learn C, C++, Python, Java, HTML, CSS, JavaScript, jQuery and WordPress development."
    },
    {
        image: i6,
        title: "Advance Diploma in Desktop Publishing (ADDP)",
        description: "Master Photoshop, CorelDRAW, Illustrator and InDesign for professional print & digital design."
    },
    {
        image: i7,
        title: "Computer Teacher Training (CTTC)",
        description: "Learn modern website designing.Become a confident computer teacher with MS Office, programming and teaching skills."
    },
    {
        image: i8,
        title: "Certificate in Computer Application (CCA)",
        description: "Build essential computer, MS Office, Google Workspace and Tally Prime skills."
    },
    {
        image: i9,
        title: "Diploma in Financial Accounting (DFA)",
        description: "Learn modern website designingBuild essential computer, MS Office, Google Workspace and Tally Prime skills.."
    }

]

function Mymap() {
    return (

        <div className="container ">
            <div className="row g-4 mt-5">

                {courses.map((course, index) => (
                    <div className="col-lg-4 col-md-6 col-12" key={index}>

                        <div className="card h-100 shadow">
                            <img
                                src={course.image}
                                className="card-img-top"
                                alt={course.title}
                                style={{ height: "180px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h6 className="fw-bold fs-5 p-1 text-primary" >
                                    {course.title}
                                </h6>

                                <p className="card-text p-1 text-muted">
                                    {course.description}
                                </p>

                                <div className="row border-top px-3 pt-3">
                                    <p className="col text-muted pt-2">Classroom Training</p>
                                   
                                    <button className="btn border-primary   text-primary col px-1 border ">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
                }
            </div>
        </div>

    )
}
export default Mymap