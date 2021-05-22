import React from "react"
import Table from "./components/Table";
import "./App.css"

class App extends React.Component {

    render() {
        const myEducation = {
            dataSource: [
                {
                    key: 1,
                    qual: "Tenth (CBSE)",
                    yop: 2017,
                    inst: "Sri Prakash Vidyaniketan",
                    gpa: "10 GPA"
                },
                {
                    key: 2,
                    qual: "Inter (SSC)",
                    yop: 2019,
                    inst: "Ascent Junior College",
                    gpa: "9.67 GPA"
                },
                {
                    key: 3,
                    qual: "Engineering (CSE)",
                    yop: 2023,
                    inst: "Andhra University College of Engieering",
                    gpa: "Still pursuing"
                }
            ],
            columns: [
                {
                    key: "qual",
                    title: "Qualification",
                },
                {
                    key: "yop",
                    title: "Year of Passing",
                },
                {
                    key: "inst",
                    title: "Institution",
                },
                {
                    key: "gpa",
                    title: "GPA",
                }
            ]
        };

        const ourTeam = {
            dataSource: [
                {
                    key: 0,
                    name: "Ratan Dheeraj - Team Lead",
                    branch: "CSE",
                    year: "3",
                    course: "B.Tech",
                    college: "Andhra University"
                },
                {
                    key: 1,
                    name: "Anjani Sowmya Bollapragada",
                    branch: "CSE",
                    year: "2",
                    course: "B.Tech",
                    college: "Andhra University"
                },
                {
                    key: 2,
                    name: "Bhanu Prasad Kandregula",
                    branch: "CSE",
                    year: "2",
                    course: "B.Tech",
                    college: "Andhra University"
                },
                {
                    key: 3,
                    name: "Neelima Bellana",
                    branch: "CSE",
                    year: "3",
                    course: "B.Tech",
                    college: "Andhra University"
                },
                {
                    key: 4,
                    name: "Akash Sunku",
                    branch: "CSE",
                    year: "2",
                    course: "B.Tech",
                    college: "Andhra University"
                },
                {
                    key: 5,
                    name: "Aparna Cheekatla",
                    branch: "CSE",
                    year: "3",
                    course: "B.Tech",
                    college: "Andhra University"
                },
                {
                    key: 6,
                    name: "Akshat Sayyam Jain",
                    branch: "CSE",
                    year: "3",
                    course: "B.Tech",
                    college: "Andhra University"
                },
                {
                    key: 7,
                    name: "Joshita Aritikatla",
                    branch: "CSE",
                    year: "2",
                    course: "B.Tech",
                    college: "VIT"
                },
            ],
            columns: [
                {
                    key: "name",
                    title: "Name",
                },
                {
                    key: "branch",
                    title: "Branch",
                },
                {
                    key: "year",
                    title: "Year",
                },
                {
                    key: "course",
                    title: "Course",
                },
                {
                    key: "college",
                    title: "College",
                }
            ]
        };

        return(
            <div className="App">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12" >
                            <h2><b>My Educational Details</b></h2>
                            <Table dataSource={myEducation.dataSource} columns={myEducation.columns} entriesPerPage={2}/>
                            <h2><b>Our Team</b></h2>
                            <Table dataSource={ourTeam.dataSource} columns={ourTeam.columns} entriesPerPage={3}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App