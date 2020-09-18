import React from 'react'
import '../index.css';
import { Button } from "@material-ui/core";

export default function Pagination() {
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: "center", marginTop: "24px" }}>
            <Button style={{ width: '85px', border: "1px solid white", fontSize: '11px', marginRight: '8px', borderRadius: '4px', height: '48px', backgroundColor: '#FFFFFF', color: '#666666' }}>Primeiro</Button>
            <Button style={{ width: '85px', marginRight: '8px', fontSize: '11px', borderRadius: '4px', height: '48px', backgroundColor: '#FFFFFF', color: '#666666' }}>Anterior</Button>
            <Button style={{ width: '48px', marginRight: '8px', fontSize: '11px', height: '48px', backgroundColor: '#D83367', color: 'white' }}>1</Button>
            <Button style={{ width: '85px', marginRight: '8px', fontSize: '11px', borderRadius: '4px', height: '48px', backgroundColor: '#FFFFFF', color: '#666666' }}>Próximo</Button>
            <Button style={{ width: '85px', borderRadius: '4px', fontSize: '11px', height: '48px', backgroundColor: '#FFFFFF', color: '#666666' }}>Último</Button>
        </div>
    )
}
