import React, { Component } from 'react';
import Products from "./Products"

const domain = "https://limitless-falls-37987.herokuapp.com"

class App extends Component {
  state = {
    proData: {},
    addToCartData: {}
  }
  async componentDidMount() {
    const productUrl = `${domain}/product`;
    console.log(productUrl)
    const proResp = await fetch(productUrl)
    const proData = await proResp.json()
    const addToCartUrl = `${domain}/addtocart`;
    const addToCartResp = await fetch(addToCartUrl)
    let addToCartData = await addToCartResp.json()
    this.setState({ proData, addToCartData })
  }

  onQuery = async (key, value, action) => {
    const url =`${domain}/addtocart`;
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ args: { [key]: value }, action: action })
    })
    let addToCartData = await resp.json()
    console.log(addToCartData)
    this.setState({ addToCartData })
  }

  render() {
    return (
      <div>
        <Products proData={this.state.proData} addToCartData={this.state.addToCartData} onQuery={this.onQuery} />
      </div>
    );
  }
}

export default App;
