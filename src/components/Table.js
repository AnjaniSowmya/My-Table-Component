import React from 'react'
import "./Table.css"

const Table = (props) => {
    const table_columns = 
        <thead>
            <tr>
                {
                    props.columns.map((column) => {
                        return (
                            <th scope="col">{column.title}</th>
                        )
                    })
                }
            </tr>
        </thead>
    const table_data = props.dataSource.map((item) =>{
        return (
            <tbody>
                <tr>
                    {
                        props.columns.map((column) => {
                            return (
                                <td>{item[column.key]}</td>
                            )
                        })
                    }
                </tr>
            </tbody>
        )
    })

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