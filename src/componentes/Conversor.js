import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            moedaA_valor: 0,
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this);
    }
    
    converter(){

        let de_para = `${this.props.moedaA}_${this.props.moedaB}`
        let url = `https://free.currconv.com/api/v8/convert?q=${de_para}&compact=ultra&apiKey=4d4d9209539b6d5620d2`

        fetch(url)
            .then(res => {

                return res.json()

            })
            .then(json => {

                let cotacao = json[de_para];

                if(this.state.moedaA_valor != null){
                    let moedaB_valor = ( parseFloat (this.state.moedaA_valor) * cotacao).toFixed(2)
                    this.setState({ moedaB_valor })
                }else

                    this.setState({ moedaB_valor:0 })
            })

    }
    
    render(){
        return(
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>

                <input type="text" onChange = {(event) => {this.setState({moedaA_valor:event.target.value})}}></input>
                <input type="button" value="Converter" onClick = {this.converter}></input>

                <h3>{this.state.moedaB_valor}</h3>

            </div>
        )
    }

}