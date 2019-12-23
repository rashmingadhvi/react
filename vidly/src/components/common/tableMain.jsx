import React, {Component} from 'react';
import TableHead from "./tableHead";
import TableData from "./tableData";

class TableMain extends Component {
    render() {
        const {data, displayColumns ,sortType, onSort} = this.props;
        return (
            <table className="table">

                <TableHead columns={displayColumns}
                           sortType={sortType}
                           onSort={onSort}/>

                <TableData data={data} columns={displayColumns}/>
            </table>
        );
    }
}

export default TableMain;