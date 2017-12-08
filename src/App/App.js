import React, { Component } from 'react';
import logo from '../App/logo.svg';
import '../App/App.css';
/****** Components ******/
import ProductCondense from '../product-condense/product-condense';
import  WishList from '../wishlist/wishlist';
import Product from '../product/product';

/******Services  ******/
import HttpService from '../Service/http-service.js';


const http = new HttpService();

class App extends Component {



  /******************
   * This constructor create an object for this specific class where you can initialize methods and call them.
   *  super(props) allow for other methods outside of this to load with the webpage
   * 
   *  constructor(props){
   *     super(props);
   *    ......
   *   }

   * "this" points to this specifc variable and then binds the load method to this.loadDate 
   * 
      this.loadData= this.loadData.bind(this); 
      this.productList= this.productList.bind(this);

      Refference varavle for the state of the products table to be intialized in the productlist method. 

      this.state = {products:[]};

     this.loadData();
   ******************/

  constructor(props){ 
   super(props); 
    this.state = {products:[]};
    this.loadData= this.loadData.bind(this); 
    this.productList= this.productList.bind(this);

    this.loadData();
  }

  /******************
   * 
   * Var self= this; 
     We need this "This" method here to reference to our component. If we left this "this" pointing to our state then it refence the promise not our state
   * 
   *create a connection with the products data then call the class and get the url and 
    returns the data **The contructor calls this function**. Then the promise (.then)
    will return the connection once it gets build. It promise to do so :)

    http.getProducts().then(data => {
      self.setState({products:data})
     }, err => {

   ******************/

  loadData= () => {

    var self= this; 
    http.getProducts().then(data => {
     self.setState({products:data})
    }, err => {

    });

  }

  /*************
   * 
   *  This method creates many product instances and trhen return them
   *  create a varable called 'list' that holds the products state and uses a map to iterate through the product table.
   *  Creates the column size and take the key id from the products table itself. Each product need its own key and this will create it 
   *  The data is grab and place inside of the different props and return the list.
   * 
   * 
     productList = () => {
     const list= this.state.products.map((product) => 
      <div className="col-sm-4"  key={product._id}>
        <Product title={product.title} price={product.price} imgUrl={product.imgUrl}/>
      </div>

       );
        return (list);
     }

   **************/

  productList = () => {
    const list= this.state.products.map((product) => 
      <div className="col-sm-4"  key={product._id}>
        <Product title={product.title} price={product.price} imgUrl={product.imgUrl}/>
      </div>

    );
    return (list);
  }

  // renders our code to the DOM 
  render() {
    // returns our code to be render
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>      
          <div className=" container-fluid App-main">
            <div className="row">
              <div className="col-sm-8">
              
                </div> 
              </div>
             {this.productList()}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
