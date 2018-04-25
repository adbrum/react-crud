import React, { Component } from 'react';
import ProductItem from "./components/ProductItem";
import AddProduct from "./components/AddProduct";

//Local storage - BD
const products = [

    {
        name: "ADAPTADOR CONECTOR HDMI HEMBRA/MACHO",
        price: "3,80",
    },
    {
        name: "ADAPTADOR CONECTOR HDMI HEMBRA/MACHO GIRATORIO",
        price: "4,00",
    },
    {
        name: "ADAPTADOR CONVERSOR  HD CONVERTER SATA/IDE",
        price: "6,40",
    }
    ,
    {
        name: "ADAPTADOR CONVERSOR  RS 232 P/ RS 485",
        price: "15,50",
    }
    ,
    {
        name: "ADAPTADOR CONVERSOR HDMI A RCA FULLHD 1080 BRANCO",
        price: "15,50",
    }
    ,
    {
        name: "ADAPTADOR DISPLAY PORT PARA HDMI",
        price: "13,00",
    }
]

localStorage.setItem('products', JSON.stringify(products))

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            products: JSON.parse(localStorage.getItem('products'))
        }

        this.onDelete = this.onDelete.bind(this)
        this.onAdd = this.onAdd.bind(this)
        this.onEditSubmit = this.onEditSubmit.bind(this)
    }

    //################ READ ################//
    componentWillMount(){
        //this.getProducts()
        const products = this.getProducts()
        this.setState({ products })//envia o conateúdo da BD para o this.state
    }

    getProducts(){
        // console.log(products)
        // const products = JSON.parse(localStorage.getItem('products'))//Parse str para um objeto json
        // this.setState({ products })//envia o conateúdo da BD para o this.state
        // return JSON.parse(localStorage.getItem('products'))
        return this.state.products
    }
    //################ END READ ################//

    //################ DELETE ################//
    onDelete(name){
        // console.log(name) //Tteste para verificar se está sendo enviado o nome do item.
        const products = this.getProducts()
        const filteredProducts = products.filter(product=> {
            return product.name !== name
        })

        // console.log(filteredProducts)//Testar se está sendo enviado o objeto a ser deletado.
        this.setState({products: filteredProducts})

    }
    //################ END DELETE ################//

    //################ ADD ################//
    onAdd(name, price){
        // console.log(name, price)//Testar se o nome é preco estáo sendo passados.
        const products = this.getProducts()

        products.push({
            name,
            price
        })

        this.setState({ products })

    }
    //################ END ADD ################//

    //################ EDIT ################//
    onEditSubmit(name, price, originalName){
        // console.log(name, price) //Tteste para verificar se está sendo enviado o nome do item.
        let products = this.getProducts()
        products = products.map(product=> {
            if (product.name === originalName){
                product.name = name;
                product.price = price
            }
            return product
        })
        this.setState({ products })
    }
    //################ END EDIT ################//

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
          <AddProduct
            onAdd={this.onAdd}
          />
          {this.state.products.map(product=> {
              return(
                  <ProductItem
                      key={product.name}
                      {...product}/*... passa todo o conteúdo do state para o componente*/
                      onDelete={this.onDelete}
                      onEditSubmit={this.onEditSubmit}
                  />
              )
          })}
      </div>
    );
  }
}

export default App;
