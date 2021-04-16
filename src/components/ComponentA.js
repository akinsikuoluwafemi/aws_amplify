import React, {useContext} from 'react';
import {CountContext} from '../App';

export default function ComponentA() {
    const { dispatch} = useContext(CountContext);

    return (
        <div>
            ComponentA
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>

        </div>
    )
}
