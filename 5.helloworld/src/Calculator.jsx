import React from "react";
import { add, sub, mul, div } from "./App";

function Calculator() {
    return (
        <>
            <ol>
                <li>add two number of a and b is {add(20, 20)}</li>
                <li>subtract two number of c and d {sub(20, 5)}</li>
                <li>multiply two number of e and f {mul(20, 5)}</li>
                <li>divide two number of g and h {div(95, 43)}</li>

            </ol>
        </>
    );
}

export default Calculator;