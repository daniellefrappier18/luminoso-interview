import React from 'react';

export default function Displayjson ({resultWords}){
    console.log(resultWords)
    return(
       <pre>
           <code>
               {JSON.stringify(resultWords, null, 2)}
            </code>
        </pre>
    )
}