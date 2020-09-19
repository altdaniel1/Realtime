import React from 'react'
import { RadioButtonChecked, Update, Tv } from "@material-ui/icons";
import "../styles/index.css";
import { ContainerFooter, NoArNav, Schedule, Clock } from "../styles/styled-components";

export default function Footer() {
    return (
        <ContainerFooter data-testid="footer">
            <NoArNav>
                <RadioButtonChecked style={{ fontSize: '16px' }} />
                <span> No Ar</span>
            </NoArNav>
            <div style={{ alignSelf: "center", display: "flex" }}>
                <Schedule>
                    <Tv style={{ color: "#666666", fontSize: '16px', marginRight: '8px' }} />
                    <span>ENCONTRO<span style={{ fontWeight: '300' }}> - </span><span style={{ fontWeight: '700' }}>10:00</span></span>
                </Schedule>
                <span style={{ fontStyle: "italic" }}>
                    <Update style={{
                        color: "#666666",
                        marginRight: '8px', fontSize: '16px'
                    }} />
                    Ultima atualização em <span style={{ fontWeight: "500" }}> 10:28</span>
                </span>
            </div>
            <div style={{
                display: "flex", justifyContent: "flex-end",
                alignSelf: "center", marginRight: '20px'
            }}>
                <span style={{ marginTop: "4px" }}>
                    Quinta, <label style={{ fontWeight: 'bold' }}>30</label> de <label style={{ fontWeight: 'bold' }}>Maio</label> de <label style={{ fontWeight: 'bold' }}>2019</label>
                </span>
                <Clock>//  10:30:42</Clock>
            </div>
        </ContainerFooter>
    )
}
