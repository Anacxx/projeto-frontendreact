import React from "react";
import { StyledInput, AreaSelect, StyledContainer, StyledTitle} from "./FiltersStyle";

function Filtros({ buscaNome, setBuscaNome, buscaSelect, setBuscaSelect, buscaMin, setBuscaMin, buscaMax, setBuscaMax }) {
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
        <StyledContainer>
                <StyledTitle>Busca por categoria</StyledTitle>
                <StyledInput 
                    type="search"
                    placeholder="Procurar produto"
                    required
                    className="search_input"
                    value={buscaNome}
                    onChange={onChangeBuscaNome}
                />
                <StyledInput
                    type="number"
                    placeholder="Valor mínimo"
                    value={buscaMin}
                    onChange={onChangeBuscaMin}
                />
                <StyledInput
                    type="number"
                    placeholder="Valor máximo"
                    value={buscaMax}
                    onChange={onChangeBuscaMax}
                />
            <AreaSelect
                className="buscaSelect"
                value={buscaSelect}
                onChange={onChangeBuscaSelect}
            >
                <option value="">Ordenar</option>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </AreaSelect>
        </StyledContainer>
    )
}
export default Filtros;