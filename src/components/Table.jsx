import React, {useEffect, useState} from 'react';

export default function Table ({resultWords}){
    const [sortedResults, updateSortedResults] = useState([]); //I'm going to copy the sorted results into this state so I don't change the state for the other components

    useEffect(()=> {
        function sortByKey(array, key) { 
            return array.sort(function(a, b) {
                var x = a[key]; var y = b[key];
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            });
        }

        updateSortedResults(sortByKey(resultWords, 'count')); //now sort this from highest count to lowest 
    
    }, [resultWords]);

    return(
        <table>
            <thead>
                <tr>
                    <th>Word</th>
                    <th>Frequency</th>
                </tr>
            </thead>
            <tbody>
                {sortedResults.slice(0, 3).map(word => { //display top 3 
                    return (
                        <tr key={word.word}>
                            <td>{word.word}</td>
                            <td>{word.count}</td>
                        </tr>
                    )}
                )}
            </tbody>
        </table>

    )

}