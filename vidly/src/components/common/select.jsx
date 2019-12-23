import React, {Component} from 'react';
import _ from "lodash";

class Select extends Component {
    render() {
        const {items, name, label, idProp, textProp, error, ...rest} = this.props;
        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <select className="form-control" id={name} name={name}
                        {...rest}
                >
                    <option key={-1} value={-1}>Choose...</option>
                    {
                        items.map(item=>(
                                <option key={item[idProp]} value={item[idProp]} >{item[textProp]}</option>
                            )
                        )
                    }
                </select>
                {!_.isEmpty(error) && (
                    <div className="alert alert-warning">{error}</div>
                )}
            </div>
        );
    }
}

Select.defaultProps = {
    idProp:"_id",
    textProp:"name"
}

export default Select;