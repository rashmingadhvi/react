import React, {Component} from 'react';
import {getShoppingItems} from '../services/ShipingItems'
import Like from "./common/like";
import Pagination from "./common/pagination";

class Cart extends Component {


    state = {
        count:0,
        shoppingItems: getShoppingItems()
    };

    render(){

        return (
            <div>
                <span>All items are listed here</span>
                {this.renderItems()}
            </div>
        );
    }

    renderItems = ()=>{
        let {shoppingItems} = this.state;

        if (shoppingItems.length===0) return "There are no shopping items in inventory!";


        return (
            <div className="container">
                {shoppingItems.map(item=>
                    (
                        <div className="row mb-3" key={item._id}>
                            <div className="col-md-2 themed-grid-col">{this.state.count}</div>
                            <div className="col-md-2 themed-grid-col">{item.name}</div>
                            <div className="col-md-2 themed-grid-col">{item.price}</div>
                            <div className="col-md-2 themed-grid-col">{item._id}</div>
                            <div className="col-md-2 themed-grid-col">
                                <button className="btn-sm "
                                        onClick={this.incQuantity}
                                >+</button>
                            </div>
                            <div className="col-md-2 themed-grid-col">
                                <button className="btn-sm "
                                        onClick={this.decrQuantity}
                                >-</button>
                            </div>
                            <div className="col-md-2 themed-grid-col">
                                <i className="fa fa-cut "
                                        onClick={() => this.removeLineItem(item)}
                                />
                            </div>
                            <div className="col-md-2 themed-grid-col">
                                <Like onLike={()=>this.handleLike(item)} item={item}  liked={item.liked} />
                            </div>


                        </div>
                    )
                )}
                <Pagination/>
            </div>

        );
    }

    incQuantity = (item) =>{
        this.setState({count:this.state.count+1});
    }

    decrQuantity = () =>{
        this.setState({count:this.state.count-1});
    }

    removeLineItem = (targetItem) =>{
        console.log(targetItem);
        this.setState({
            shoppingItems:
                this.state.shoppingItems.filter(item => item._id !== targetItem._id)
    });
    }

    handleLike = (targetItem) =>{
        const items = [...this.state.shoppingItems];
        const index = items.indexOf(targetItem);
        items[index] = {...items[index]};
        items[index].liked = !items[index].liked;
        this.setState({shoppingItems:items});
    }
}

export default Cart;