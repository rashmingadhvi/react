import _ from 'lodash';

export function paginate(allItems, currentPage, pageSize){
    const startIndex = (currentPage -1 ) * pageSize;
    return _.slice(allItems,startIndex,(startIndex+pageSize));
}

export function sort(allItems,columns, orderBys ){
    return _.orderBy(allItems,columns,orderBys);
}
