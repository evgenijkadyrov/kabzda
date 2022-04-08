import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemo '
}

export const Example2 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA = 1
    let resultB = 1

    resultA=useMemo(()=>{
        for (let i = 1; i <= a; i++) {
            let fake=0
            while(fake<100000000){
                fake++
                const fakeCount=Math.random()
            }
            resultA = resultA * i}
        return resultA
    },[a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result a:{resultA}
            </div>
            <div>
                Result b:{resultB}
            </div>
        </div>
    );
}

;

