import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const IMC = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (alturaNum > 0) {
            const resultado = pesoNum / (alturaNum * alturaNum);
            return <p>IMC: {resultado.toFixed(2)}</p>;
        } else {
            return <p>Por favor, insira valores válidos.</p>;
        }
    }

    return (
        <form>
            <input className={styles.input} type='number' placeholder='peso em KG, ex: 73.5' onChange={evento => setPeso(evento.target.value)}></input>
            <input className={styles.input} type='number' placeholder='altura em M, ex: 1.72' onChange={evento => setAltura(evento.target.value)}></input>
            {IMC()}

            <table>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Menos de 18,5</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr>
                        <td>18,5 - 24,9</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr>
                        <td>25 - 29,9</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr>
                        <td>30 - 34,9</td>
                        <td>Obesidade grau 1</td>
                    </tr>
                    <tr>
                        <td>35 - 39,9</td>
                        <td>Obesidade grau 2</td>
                    </tr>
                    <tr>
                        <td>40 ou mais</td>
                        <td>Obesidade grau 3</td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default Formulario