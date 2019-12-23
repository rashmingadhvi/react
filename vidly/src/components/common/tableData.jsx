import _ from 'lodash';
import React, {Component} from 'react';
class TableData extends Component {

    renderCell(column,item){
        if(column.component){
            return column.component(item);
        }else{
          return _.get(item, column.name);
        }
    }

    render() {
        const {data, columns} = this.props;
        return (

            <tbody>
            {
                data.map(item=>
                    (
                        <tr key={item._id}>
                            {
                                columns.map(column=>
                                    <td key={item._id+"-"+column.name+"-"+column.label}>{
                                        this.renderCell(column,item)
                                    }</td>
                                )
                            }
                        </tr>
                    )
                )}
            </tbody>
        );
    }
}

export default TableData;