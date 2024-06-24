import React from 'react';
import styled from 'styled-components';
{/* <style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap');
</style> */}


const MainLayoutStyle = styled.section`
    width: 60vw;
    dysplay: flex;
    margin: 0 auto;
    text-align: center;
    flex-direction: row;
    align-items: center;
`;

export default function MainLayout({ children }) {
    return <MainLayoutStyle>{children}</MainLayoutStyle>
}