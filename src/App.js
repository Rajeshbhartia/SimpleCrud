import React, { Component } from 'react';
import Products from "./Products"

class App extends Component {
  state = {
    proData: {},
    addToCartData: {}
  }
  async componentDidMount() {
    const productUrl = "http://localhost:3010/product";
    const proResp = await fetch(productUrl)
    const proData = await proResp.json()

    const addToCartUrl = "http://localhost:3010/addtocart";
    const addToCartResp = await fetch(addToCartUrl)
    let addToCartData = await addToCartResp.json()

    this.setState({ proData, addToCartData })
  }

  onQuery = async (key, value, action) => {
    const url = "http://localhost:3010/addtocart";
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
