import React from 'react'
import Emoji from './emoji'
import Tituloemoji from './tituloemoji'
import Descriemoji from './descriemoji'

function CartaoEmoji(props) {
    return (
        <dl className="dictionary">
            <div className="term">
                <dt>
                    <Emoji emoji={props.emoji} name={props.name} />
                    <Tituloemoji name={props.name}/>                    
                </dt>
                <dd>
                    <Descriemoji meaning={props.meaning}/>
                </dd>
            </div>
        </dl>

    )
    
}
   

export default CartaoEmoji