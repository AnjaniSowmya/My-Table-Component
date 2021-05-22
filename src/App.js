import React from "react"
import Table from "./components/Table";

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
                <Table dataSource={dataSource} columns={columns}/>
            </div>
        )
    }
}
export default App