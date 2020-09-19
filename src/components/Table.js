import React, { useState } from 'react'
import '../styles/index.css';
import { Checkbox, Button } from "@material-ui/core";
import Users from "../services/Users";
import { TdTitle, TdBody } from "../styles/styled-components";
import { Create, Delete } from "@material-ui/icons";
import Pagination from './Pagination';

export default function Table() {

    const [state, setState] = useState({ visibility: false, index: 0 });

    const trBody = {
        "padding": "8px",
        "height": "48px"
    };

    const theadStyle = {
        backgroundColor: '#FFFFFF',
        height: '50px', borderRadius: '4px'
    }

    return (
        <div data-testid="table">
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "6px" }}>
                <thead>
                    <tr style={theadStyle}>
                        <TdTitle></TdTitle>
                        <TdTitle>USUÁRIO</TdTitle>
                        <TdTitle>EMAIL</TdTitle>
                        <TdTitle>DATA DE INCLUSÃO</TdTitle>
                        <TdTitle>DATA DE ALTERAÇÃO</TdTitle>
                        <TdTitle>REGRAS</TdTitle>
                        <TdTitle>STATUS</TdTitle>
                        <TdTitle style={{ textAlign: "center" }}>AÇÕES</TdTitle>
                    </tr>
                </thead>


                {Users.map((user, index) => (
                    <tbody key={index}>
                        <tr
                            onClick={() => {
                                setState({ visibility: !state.visibility, index })
                            }}
                            style={{
                                ...trBody,
                                borderBottom: state.visibility && state.index === index ? "2px solid #D83367" : "none",
                                backgroundColor: state.visibility && state.index === index
                                    ? "rgba(54, 25, 25, .00004)"
                                    : index % 2 == 0 ? "#F5F5F5" : "#E9E9E9"
                            }}>
                            <TdBody>
                                <Checkbox checked={state.visibility && state.index === index} />
                            </TdBody>
                            <TdBody>{user.name}</TdBody>
                            <TdBody>{user.email}</TdBody>
                            <TdBody>
                                <span style={{ marginLeft: '16px' }}>
                                    {user.includeDate}
                                </span>
                            </TdBody>
                            <TdBody>
                                <span style={{ marginLeft: '16px' }}>
                                    {user.lastUpdate}
                                </span>
                            </TdBody>
                            <TdBody>
                                <span style={{ marginLeft: '16px' }}>
                                    {user.rules}
                                </span>
                            </TdBody>
                            <TdBody>
                                <span style={{ color: "#31BA1F", fontWeight: '500', marginLeft: '10px' }}>
                                    {user.status}
                                </span>
                            </TdBody>
                            <TdBody style={{ minWidth: '105px', textAlign: "center" }}>
                                <Button onClick={(e) => { e.stopPropagation() }}>
                                    <span style={{ color: "#666666", fontWeight: 'bold', fontSize: '20px' }}>
                                        {
                                            state.visibility && index === state.index
                                                ? <div style={{ display: "flex" }}>
                                                    <Delete />
                                                    <div style={{ marginLeft: "8px" }}><Create /></div>
                                                </div>
                                                : <div>...</div>
                                        }
                                    </span>
                                </Button>
                            </TdBody>
                        </tr>
                    </tbody>
                ))}
            </table>
            <Pagination />
        </div>
    )
}
