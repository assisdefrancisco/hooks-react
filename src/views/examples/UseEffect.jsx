import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    const number = parseInt(n);
    if (number < 0) return -1
    if (number === 0) return 1
    return calcFatorial(number -1) * number;
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [status, setStatus] = useState('');

    useEffect(() => {
        setFatorial(calcFatorial(number));
    }, [number])

    useEffect(() => {
        if (fatorial> 1000000) {
            document.title = "Eita!!!"
        }
    }, [fatorial])

    useEffect(() => {
         setStatus(number % 2 === 0 ? 'Par' : 'Impar');
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className='text'>Fatorial: </span>
                    <span className='text red'>{fatorial !== -1 ? fatorial : 'Não existe!'}</span>
                </div>
                <input type="number" className='input' 
                    value={number}
                    onChange={e => setNumber(e.target.value) } />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className='text'>Status: {status}</span>
            </div>
        </div>
    )
}

export default UseEffect
