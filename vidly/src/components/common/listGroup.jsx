import React from 'react';

const ListGroup = (props)=>{

    const {items, selected, idProp, textProp, onItemClick} = props;
    let classes = "list-group-item";
    return (
      <ul className="list-group">

          { items.map(item => (
          <li key={item[idProp]}
            className={selected[idProp]===item[idProp]?classes+" active":classes}
            onClick={() => onItemClick(item)}
          >
            {item[textProp]}
          </li>
        ))}
      </ul>
    );
}

ListGroup.defaultProps = {
    idProp:"_id",
    textProp:"name"
}
export default ListGroup;
