import React, { useState } from "react"


export function Counter() {
    
    const [contador, setContador] = useState(0)
    const [name, setName] = useState('')
    const [senha, setSenha] = useState('')


        return(
            <div style={{marginTop: '20px', marginLeft: '40rem' }}>
                <h1>{contador}</h1> 

                <div>
                    <button onClick={() => {
                        // this.contador = this.contador - 1
                       setContador(contador - 1)
                    }}>
                        Diminuir
                    </button>
                    <button onClick={() => {
                        // this.contador = this.contador + 1
                        setContador(contador + 1)
                    }}>
                        Aumentar
                    </button>
                </div>





                <div>
                    <form style={{marginTop: '20px'}}>
                        <input type="text" placeholder="Nome" value={name}
                        onChange={(event) => {
                            setName(event.target.value)
                            console.log(event.target.value)
                        }}
                        />



                        <input type="password" name="senha" id="senha"  placeholder="Senha" 
                        value={senha} 
                        onChange={(event) => {
                            setSenha(event.target.value)
                            console.log(event.target.value)
                        }}
                        />
                    </form>
                </div>
            </div>
        )
}
