//Input: Columns{name, label}, sortOrder (asc, desc), onSort
import React, {Component} from 'react';

class TableHead extends Component {
    render() {
        const {columns, sortType} = this.props;
        return (
            <thead>
            <tr className="clickable">
                {columns.map(column => (
                    <th
                        key={(column.name+"-"+column.label)}
                        scope="col"
                        onClick={() =>  this.doSorting(!column.sortable?column.name:null)}
                    >
                        {column.label}
                        {this.renderIcon(column,sortType)}

                    </th>
                ))}
            </tr>
            </thead>
        );
    }

    renderIcon(column,sortType){

        if(!column.sortable && sortType.column===column.name){

            const name =  sortType.order === "asc"
                ? "fa fa-arrow-up"
                : "fa fa-arrow-down";

            return <i
                className={name}
            />
        }

    }

    doSorting(sortColumn){

        if(sortColumn){
            const sortType = {...this.props.sortType};
            if(sortType.column===sortColumn){
                sortType.order= sortType.order==="asc"?"desc":"asc";
            }else{
                sortType.column=sortColumn;
                sortType.order="asc";
            }



            this.props.onSort(sortType);
        }

    }

}
export default TableHead;

