import styled from 'styled-components';

const Header = styled.div`
    width: 100%;
    height: 96px;
    display: flex;
    background-color: #F5F5F5;
`;

const Nav = styled.div`
    margin: 24px 0 24px 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const Buttons = styled.div`
    margin: 0px 40px 0px 40px;
`;

const ContainerFooter = styled.div`
    background-color: #333333;
    display: flex;
    justify-content: space-between; 
    height: 100%;
    color: white;
    height: 47px;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const NoArNav = styled.div`
    color: #FF8700; 
    font-family: Audiowide;
    margin-left: 16px;
    align-self: center;
`;

const Schedule = styled.div`
    margin-right: 40px;
    font-size: 14px;
    font-family: Roboto;
`;

const Clock = styled.div`
    font-size: 24px;
    color: #FF8700; 
    margin-left: 16px; 
    font-family: Audiowide
`;

const TdTitle = styled.td`
    color: #333333;
    size: 12px;
    font-weight: 500
`;

const TdBody = styled.td`
    padding: 8px;
    color: #333333;
    size: 14px;
    font-weight: 400
 `;


export {
    Header,
    Nav,
    Buttons,
    ContainerFooter,
    NoArNav,
    Schedule,
    Clock,
    TdTitle,
    TdBody
}