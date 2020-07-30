import React from './node_modules/react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from './node_modules/styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 50px;
`;

function PageDefault({ children}) {
    return (
        <>
            <Menu />
                <Main> {children} </Main>
            <Footer />
        </>
    )
}

export default PageDefault;