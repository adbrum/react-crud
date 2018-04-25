import React, { Component } from 'react'


class AddProduct extends Component{
    constructor(props){
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event){
        event.preventDefault()//previne que a pagina dê um refresh
        // console.log(this.nameInput.value, this.priceInput.value)//Testar se o conteudo dos inputs estã sendo passado.
        this.props.onAdd(this.nameInput.value, this.priceInput.value)//passar o conteúdo dos inputs para o onAdd

        this.nameInput.value = ''
        this.priceInput.value = ''
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <h3>Add Product</h3>
                <input type="text"
                       placeholder="Name"
                       ref={nameInput=> this.nameInput = nameInput}
                       />
                <input type="text"
                       placeholder="Price"
                       ref={priceInput=> this.priceInput = priceInput}
                       />
                <button>Add</button>
                <hr />
            </form>
        )
    }
}

export default AddProduct