import React from "react";
import { Containersx,Formulario, AreaBusca, AreaSelect} from "./HeaderStyle";
import { useState } from "react";



function Header({ buscaNome, setBuscaNome, buscaSelect, setBuscaSelect, buscaMin, setBuscaMin, buscaMax, setBuscaMax }) {
    function onChangeBuscaNome(e) {
        setBuscaNome(e.target.value)
        console.log(buscaNome)
    }
    function onChangeBuscaSelect(e) {
        setBuscaSelect(e.target.value)
        console.log(buscaSelect)
    }
    function onChangeBuscaMin(e) {
        setBuscaMin(e.target.value)
        console.log(buscaMin)
    }
    function onChangeBuscaMax(e) {
        setBuscaMax(e.target.value)
        console.log(buscaMax)
    }
    return (
        <Containersx>
            <Formulario>
                <AreaBusca 
                    type="search"
                    placeholder="Procurar produto"
                    required
                    className="search_input"
                    value={buscaNome}
                    onChange={onChangeBuscaNome}
                />
                <AreaBusca
                    type="number"
                    placeholder="Valor mínimo"
                    value={buscaMin}
                    onChange={onChangeBuscaMin}
                />
                <AreaBusca
                    type="number"
                    placeholder="Valor máximo"
                    value={buscaMax}
                    onChange={onChangeBuscaMax}
                />
            </Formulario>
            <AreaSelect
                className="buscaSelect"
                value={buscaSelect}
                onChange={onChangeBuscaSelect}
            >
                <option value="">Ordenar</option>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </AreaSelect>
        </Containersx>
    )
}
export default Header;