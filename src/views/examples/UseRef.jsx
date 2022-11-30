import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseRef = (props) => {
    const [valor1, setValor1] = useState('');
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1
    }, [valor1])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <div className="center">                
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{valor1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" 
                    value={valor1}
                    onChange={e => setValor1(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseRef
