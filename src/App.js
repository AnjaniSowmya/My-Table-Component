import React from "react"
import Table from "./components/Table";
import "./App.css"

class App extends React.Component {

    render() {
        const dataSource = [
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
        ];
        const columns = [
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
            },
        ];

        return(
            <div className="App">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12" >
                            <h2><b>My Educational Details</b></h2>
                            <Table dataSource={dataSource} columns={columns} entriesPerPage={2}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App