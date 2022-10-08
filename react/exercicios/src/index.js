import React from 'react' 
import ReactDOM from 'react-dom'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//import  Saudacao from './componentes/Saudacao'
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
//ReactDOM.render(<h1>React</h1>, document.getElementById('root'))
//ReactDOM.render(<Primeiro/>, document.getElementById('root'))
//$('<h1>').html('React') Conversão para chamadas react no JS > <h1>React</h1> é uma extensão do javascript para react
//ReactDOM.render(<BomDia nome = "Guilherme"/>, document.getElementById('root'))
/*ReactDOM.render(
    <div>
        <Multiplos.BoaTarde nome="Ana"/>
        <Multiplos.BoaNoite nome="Pedro"/>
    </div>,
    document.getElementById('root'))
*/
/*ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João"/>
    </div>,
    document.getElementById('root'))*/

    ReactDOM.render(
        <div>
            <Pai nome="Paulo" sobrenome="Silva">
                <Filho nome="Pedro" />         
                <Filho nome="Paulo Jr" />         
                <Filho nome="Carla" />         
            </Pai>   
        </div>,
        document.getElementById('root')) 