import React from 'react'
import "./Table.css"
const TableData = {
    data: [
        {
            key: 1,
            qualification: "Tenth (CBSE)",
            yop: 2017,
            institution: "Sri Prakash Vidyaniketan",
            gpa: "10 GPA"
        },
        {
            key: 2,
            qualification: "Inter (SSC)",
            yop: 2019,
            institution: "Ascent Junior College",
            gpa: "9.67 GPA"
        },
        {
            key: 3,
            qualification: "Engineering (CSE)",
            yop: 2023,
            institution: "Andhra University College of Engieering",
            gpa: "Still pursuing"
        }
    ],
    columns: [
        {
            key: "SNo",
            title: "SNo",
        },
        {
            key: "Qualification",
            title: "Qualification",
        },
        {
            key: "YOP",
            title: "Year of Passing",
        },
        {
            key: "Institution",
            title: "Institution",
        },
        {
            key: "GPA",
            title: "GPA",
        },

    ]
}

const Table = (props) => {
    const table_data = TableData.data.map((item) =>{
        return (
            <tbody>
                <tr>
                    <th scope="row">{item.key}</th>
                    <td>{item.qualification}</td>
                    <td>{item.yop}</td>
                    <td>{item.institution}</td>
                    <td>{item.gpa}</td>
                </tr>
            </tbody>
        )
    });

    const table_columns = 
        <thead>
            <tr>
                {
                    TableData.columns.map((item) => {
                        return (
                            <th scope="col">{item.title}</th>
                        )
                    })
                }
            </tr>
        </thead>

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12" >
                    <h2><b>My Educational Details</b></h2>
                    <div className="my-content">
                    <table className="table my-table table-bordered">
                        {table_columns}
                        {table_data}
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Table;