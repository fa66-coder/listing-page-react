import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredCounter, fetchCounters, addCounters, loadCountersAsync } from "../../features/Counters/countersSlice";

export default function SampleDemo() {

    const dispatch = useDispatch()
    const count = useSelector(state=> state.counters.count)
    const filteredCounter = useSelector(state => fetchFilteredCounter(state, 10))

    useEffect(()=>{
        dispatch(loadCountersAsync()).then(()=>{
            console.log("Finished Loading")
        })
        .catch((error) =>{
            console.log("Error occured", error)
        })
    }, [])

    return (
        <div>
            <button onClick={()=>dispatch(addCounters(1))}> Fetch Counters </button>
            <div> Count state {count}</div>
            {filteredCounter && <div> Filtered Countered val {filteredCounter} </div> }
        </div>
    )
}