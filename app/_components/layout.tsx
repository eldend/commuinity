
import Link from 'next/link';
import styled from 'styled-components';

interface LayoutProps {
    children: React.ReactNode
}
export default function Layout({children}: LayoutProps){
    return(
        <>
        <TopBar>
            <Logo>
                <SLink href="/">
                    Maksbook
                </SLink>
            </Logo>
            <SignIn>
                <SLink href="/sign-in">
                    로그인
                </SLink>
            </SignIn>
        </TopBar>
        <Main>
            {children}
        </Main>
        </>
    )
}
const TopBar = styled.header `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: rgba(84, 9, 218, 1);
  box-sizing: border-box;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  grid-template-columns: 7fr 3fr;
  gap : 3rem;
  margin: 3rem auto;
  margin-top: 100px;
  padding:0 1rem;
  max-width: 1000px;
  align-items: center;
`;

const Logo = styled.div`
  font-family: 'Jockey One';
  color: white;
  font-weight: 700;

`;

const SignIn = styled.button`
  font-family: 'Jockey One';
  font-weight: 700;
  width: 100px;
  height: 30px;
  opacity: 0.8;
  color: gray;
  background-color: #FFFFFF;
  border-radius: 10px;
  stroke: none;
  border: none;
  cursor: pointer;
`;
const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;