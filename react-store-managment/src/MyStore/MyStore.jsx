import React from 'react';
import { Button } from 'semantic-ui-react';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    fakeProductInfoList = () => {
        let arr = Array.from(Array(10).keys());
        const maxPrice = 100;
        const minPrice = 50;
        let productInfoList = arr.map((pi, i) => {
            pi = {};
            pi.name = `product #${i}`;
            pi.price = Math.floor(Math.random()*(maxPrice-minPrice+1)+minPrice);
            return pi
        })
        return productInfoList
    }

    componentWillMount() {
        // TODO: remove
        this.setState({productInfoList: this.fakeProductInfoList()})
    }


    render() {
        const storeName = <div>Store Name: {this.props.storeName ? this.props.storeName : "fill store name"}</div>
        const storeAddress = <div>Store Address: {this.props.Address ? this.props.Address :  "fill store address"}</div>
        const storeCountry = <div>Store Address: {this.props.storeCountry ? this.props.storeCountry :  "fill store country"}</div>
        return (
            <div>
                <div>
                    {storeName}
                    {storeAddress}
                    {storeCountry}
                </div>
                
                {this.state.productInfoList.map(productInfo => {
                    return (
                        <div>
                            {productInfo.name} - ${productInfo.price}
                            
                        </div>
                    )
                })}
            </div>

        )
    }
}

export default Header;