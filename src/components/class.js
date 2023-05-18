import { Component } from "react"

class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: "xxxx",
            email: "",
            password: ""
        }

        console.log(this.state)
    }

    changeNames = () => {
        this.setState({nama: "Tes"})

        console.log(this.state)
        // return
    }
    
    
    
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Ini dari class {this.state.nama}</h1>
                <button type="button" onClick={this.changeNames}>Change</button>
            </div>
        )
    }
}

export default Hello