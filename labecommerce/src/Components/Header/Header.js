import React from "react";
import logo from '../../images/logo.png'
import {HeaderDiv, SyledImg} from "./HeaderStyle";
function Header(){
    return(
        <HeaderDiv>
            <SyledImg src={logo}/>
        </HeaderDiv>
    )
}
export default Header;