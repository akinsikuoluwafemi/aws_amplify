import React, {useContext} from 'react';
import {CountContext} from '../App';


export default function ComponentD() {
    const {count} = useContext(CountContext);
    
    return (
        <div>
            count: {count}
        </div>
    )
}
