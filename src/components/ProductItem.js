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
        this.setState({isEdit: false})
    }

    render() {
        const {name, price} = this.props

        return (
            <div key={name} className="form-group">
                {
                    this.state.isEdit
                        ? (<div>
                            <form className="form-inline" onSubmit={this.onEditSubmit}>
                            <div className="form-group">
                                <input type="text"
                                   placeholder="Name"
                                   className="form-control"
                                   ref={nameInput => this.nameInput = nameInput}
                                   defaultValue={name}/>
                            <input type="text"
                                   placeholder="Price"
                                   className="form-control"
                                   ref={priceInput => this.priceInput = priceInput}
                                   defaultValue={price}/>
                            <button>Save</button>
                            </div>
                        </form>
                        </div>)
                        : (
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th className="col-sm-4">Name</th>
                                    <th className="col-sm-4">Price</th>
                                    <th className="col-sm-4"></th>
                                    {/*<th className="col-sm-2"></th>*/}
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={this.onDelete}>Delete</button>{`   `}
                                        <button className="btn btn-primary" onClick={this.onEdit}>Edit</button>
                                    </td>

                                </tr>
                                </tbody>
                            </table>
                        )
                }
            </div>
        )
    }
}

export default ProductItem