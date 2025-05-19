'use client';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
const CommunityList = [
  { id: 1, date: "2023-01-01", content: "오늘 뭐 보지..." },
  { id: 2, date: "2023-01-02", content: "오늘은 금요알!" },
  { id: 3, date: "2023-01-03", content: "얏호~~~~~!" },
  { id: 4, date: "2023-01-04", content: "음....." },
]

export default function Home() {

  return (
    <>
      <TopBar>
        <Logo>MaskBook</Logo>
        <SignIn>로그인</SignIn>
      </TopBar>

      <Main>
        <LeftPanel>
          <SearchBar>
            <SearchIcon>
              <Image src={"/find.svg"} alt="검색" width={20} height={20} />
            </SearchIcon>
            <input type="text" placeholder="검색어를 입력하세요." />
          </SearchBar>
          <Contents>
            <ContentsHeading>
                <span>
                  Contents
                </span>
            </ContentsHeading>
            <List>
              {CommunityList.map((item) => (
                <ListRow key={item.id}>
                  <SLink href={`/post/${item.id}`}>
                    <div>{item.content}</div>
                    <div>{item.date}</div>
                  </SLink>
                </ListRow>
              ))}
            </List>
          </Contents>
        </LeftPanel>
        <RightPanel>
          <Image src={"/ad.png"} alt="광고" fill />
        </RightPanel>
      </Main>
     </>
  );
}

//////// style 선언 ////////
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
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap : 3rem;
  margin: 3rem auto;
  margin-top: 100px;
  padding:0 1rem;
  max-width: 1000px;
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
const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  `;
const RightPanel = styled.div`
  aspect-ratio: 1/2;
  position: relative;
  cursor: pointer;

`;
const SearchBar = styled.div`
  border: 3px solid #E0E0E0;
  width: 100%;
  border-radius: 50px;
  height: 50px;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: left;

  input {
    width: 100%;
    height: 90%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;
    font-family: 'Jockey One';
    font-weight: 700;
    font-size: 16px;
    color: gray;
    &:focus {
      outline: none;
    }
  }
`;
const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 45px;
  margin-left: 10px;
  border-radius: 50%;
`;
const Contents = styled.div`
  background: #FFFFF0;
  border-radius: 10%;
`;
const List = styled.div
` 
`;

const ListRow = styled.div`
  display:flex;
  justify-content:space-between;
`;

const SLink = styled(Link)`
  color: gray;
  text-decoration: none;
  padding: 1rem;
  border-bottom: 3px solid gray;

  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const ContentsHeading = styled.div`
  font-size:1rem;
  font-weight:800;
  display:flex;
  align-items:center;
  gap: 0.5rem;
  padding: 1rem;
  padding-bottom: 1rem;
  border-bottom:3px solid rgba(84, 9, 218, 1);
  margin: 3px;
`;