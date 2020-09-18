import React from 'react'
import { Drawer, Button } from '@material-ui/core';
import { Tune, Close, DateRange, HdrStrong, ArrowDropDown } from "@material-ui/icons";

export default function ({ filterDrawer, setFilterDrawer }) {
    return (
        <Drawer anchor={'right'} open={filterDrawer} onClose={() => setFilterDrawer(false)}>
            <div style={{ backgroundColor: "#F5F5F5", height: "100%", maxWidth: "480px" }}>
                <div style={{ minHeight: "96px", backgroundColor: "#FFFFFF", display: 'flex', justifyContent: "space-between" }}>
                    <div style={{ alignSelf: "center", marginLeft: "24px" }}>
                        <Tune style={{ color: "#999999", width: "24px", height: "24px", marginRight: "8px" }} />
                        <label style={{ fontSize: "16px", fontFamily: "Audiowide", verticalAlign: "top" }}>Filtros</label>
                    </div>

                    <Button onClick={() => setFilterDrawer(false)}>
                        <Close />
                    </Button>
                </div>

                <div style={{ margin: "24px 24px 0 24px" }}>
                    <label style={{ fontSize: '16px', color: "#666666", whiteSpace: "normal", fontFamily: "Roboto", fontStyle: "italic" }}>
                        Utilize os filtros abaixo para refinar os resultados da tabela,
                        clique no botão APLICAR para salvar as alterações.
                    </label>
                </div>

                <div style={{ alignSelf: "center", margin: "40px 24px 24px", height: "46px", borderBottom: "2px solid #E9E9E9" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>
                            <DateRange style={{ color: "#999999", width: "24px", height: "24px", marginRight: "16px" }} />
                            <label style={{ fontSize: "16px", verticalAlign: "top", fontFamily: "Roboto", fontWeight: "500", color: "#D83367" }}>TODAS AS DATAS DE INCLUSÃO</label>
                        </span>
                        <ArrowDropDown style={{ color: "#999999" }} />
                    </div>
                </div>


                <div style={{ alignSelf: "center", margin: "40px 24px 24px", height: "46px", borderBottom: "2px solid #E9E9E9" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>
                            <DateRange style={{ color: "#999999", width: "24px", height: "24px", marginRight: "16px" }} />
                            <label style={{ fontSize: "16px", verticalAlign: "top", fontFamily: "Roboto", fontWeight: "500", color: "#D83367" }}>TODAS AS DATAS DE ALTERAÇÃO</label>
                        </span>
                        <ArrowDropDown style={{ color: "#999999" }} />
                    </div>
                </div>


                <div style={{ alignSelf: "center", margin: "40px 24px 24px", height: "46px", borderBottom: "2px solid #E9E9E9" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>
                            <HdrStrong style={{ color: "#999999", width: "24px", height: "24px", marginRight: "16px" }} />
                            <label style={{ fontSize: "16px", verticalAlign: "top", fontFamily: "Roboto", fontWeight: "500", color: "#D83367" }}>ATIVOS E INATIVOS</label>
                        </span>
                        <ArrowDropDown style={{ color: "#999999" }} />
                    </div>
                </div>

                <div style={{ margin: "40px 24px 24px" }}><Button style={{ height: "67px", width: "100%", border: "2px solid #999999", color: "#D83367", opacity: 0.4 }}>Aplicar</Button></div>
            </div>

        </Drawer>
    )
}
