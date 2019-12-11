import React from 'react';
import './Content.scss';
import { NavLink } from 'react-router-dom';
import imagem1 from './img/image.png'
import { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                <NavLink to="/tela2">
                    <div className="container-content">
                        <h4>Segundo componente!</h4>

                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                        <img src={imagem1}></img>
                    </div>
                </NavLink>
            </div>
        );
    }
} 

export default Content;