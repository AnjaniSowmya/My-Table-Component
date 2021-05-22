import React from 'react'
import "./Table.css"

class Table extends React.Component {
    constructor(props) {
        super(props);
        let entriesPerPage = props.entriesPerPage||10;
        this.state = {
            entriesPerPage: entriesPerPage,
            currentPage: 0,
            numberOfPages: Math.ceil(this.props.dataSource.length/(entriesPerPage*1.0)),
            table_columns : 
                <thead>
                    <tr>
                        {
                            this.props.columns.map((column) => {
                                return (
                                    <th scope="col">{column.title}</th>
                                )
                            })
                            
                        }
                    </tr>
                </thead>
        };
        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
        this.switchToPage = this.switchToPage.bind(this)
        this.changePage = this.changePage.bind(this)
    }

    prev() {
        let cp = this.state.currentPage;
        cp--;
        if(cp<0) cp=0;
        this.changePage(cp);
    }

    next() {
        let cp = this.state.currentPage;
        cp++;
        if(cp>(this.state.numberOfPages-1)) cp=this.state.numberOfPages-1;
        this.changePage(cp);
    }

    switchToPage(e) {
        this.changePage(e.target.id);
    }

    changePage(cp) {
        this.setState({
            currentPage: cp 
        });
    }

    render() {
        const startIndex = this.state.currentPage*this.state.entriesPerPage;
        const endIndex = startIndex + this.state.entriesPerPage;
        const pageData = this.props.dataSource.slice(startIndex, endIndex);
        const table_data = pageData.map((item) =>{
            return (
                <tbody>
                    <tr>
                        {
                            this.props.columns.map((column) => {
                                return (
                                    <td>{item[column.key]}</td>
                                )
                            })
                        }
                    </tr>
                </tbody>
            )
        })

        const pageNumbers = []
        for (
            var i=0;
            i<this.state.numberOfPages;
            i++) {
            pageNumbers.push(
                <button type="button" className="btn btn-light my-button" id={i} onClick={this.switchToPage}>
                {(i===this.state.currentPage)?<b>{i+1}</b>:i+1}
                </button>)
        }
        return(
            <div>
                <div className="my-table-content">
                    <table className="table my-table table-bordered">
                        {this.state.table_columns}
                        {table_data}
                    </table>
                </div>
                <div className="row my-navigator">
                    <button type="button" class="btn btn-light my-button" onClick={this.prev}>&lt;</button>
                    {pageNumbers}
                    <button type="button" class="btn btn-light my-button" onClick={this.next}>&gt;</button>
                </div>
            </div>
        )
    }
}
export default Table;