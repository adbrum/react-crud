import React, {Component} from 'react'

class ProductItem extends Component {
    constructor(props) {
        super()

        this.state = {
            isEdit: false
        }

        this.onDelete = this.onDelete.bind(this)
        this.onEdit = this.onEdit.bind(this)
        this.onEditSubmit = this.onEditSubmit.bind(this)
    }

    onDelete() {
        const {onDelete, name} = this.props//Simplifica o path da chamada.

        onDelete(name)
    }

    onEdit() {
        this.setState({isEdit: true})

    }

    onEditSubmit(event) {
        // console.log(this.nameInput.value, this.priceInput.value)//Teste para verificar se os valores dos inputs estnão sendo passados.
        event.preventDefault()//previne que a pagina dê um refresh
        this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name)
        this.setState({ isEdit: false })
    }

    render() {
        const {name, price} = this.props

        return (
            <div key={name}>
                {
                    this.state.isEdit
                        ? (<form onSubmit={this.onEditSubmit}>
                            <input type="text"
                                   placeholder="Name"
                                   ref={nameInput => this.nameInput = nameInput}
                                   defaultValue={name}/>
                            <input type="text"
                                   placeholder="Price"
                                   ref={priceInput => this.priceInput = priceInput}
                                   defaultValue={price}/>
                            <button>Save</button>
                        </form>)
                        : (<div>
                            <span>{name}</span>
                            {` | `}
                            <span>{price}</span>
                            {` | `}
                            <button onClick={this.onDelete}>Delete</button>
                            {` | `}
                            <button onClick={this.onEdit}>Edit</button>
                        </div>)
                }
            </div>
        )
    }
}

export default ProductItem