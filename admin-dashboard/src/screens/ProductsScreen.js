import { Component } from "react";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import "../App.css";

class ProductsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          id: "",
          name: "",
          description: "",
          price: "",
          discount: "",
          image: "",
          product_category: {
            name: "",
          },
          detail: "",
        },
      ],
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/products");
    const responseJSON = await response.json();
    const products = responseJSON.data;
    console.log(products);

    this.setState({
      productList: products,
    });
  }

  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <SideMenu />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header />
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Listed Products</h1>
                </div>
                <div>
                  <p>{this.state.productList.map((product) => product.name)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsScreen;
