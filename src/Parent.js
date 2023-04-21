import React, { useState } from 'react';
import {Son, Daughter} from "./Child";

function Parent() {
    const [sonAllowance, setSonAllowance] = useState(50);
    const [daughterAllowance, setDaughterAllowance] = useState(50);

    function allocateAllowance(child, value) {
        if (child === 'Son')
            setSonAllowance(value);
        else if (child === 'Daughter')
            setDaughterAllowance(value);
    }

    return(
        <div>
            <Son allowance={ sonAllowance } askAllowance={ allocateAllowance } />
            <Daughter allowance={ daughterAllowance } askAllowance={ allocateAllowance } />
        </div>
    );
}

export default Parent;