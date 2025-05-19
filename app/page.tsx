'use client';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Layout from './_components/layout';
const CommunityList = [
  { id: 1, date: "2023-01-01", content: "오늘 뭐 보지..." },
  { id: 2, date: "2023-01-02", content: "오늘은 금요알!" },
  { id: 3, date: "2023-01-03", content: "얏호~~~~~!" },
  { id: 4, date: "2023-01-04", content: "음....." },
]

export default function Home() {

  return (
    <Layout>
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
    </Layout>
  );
}

//////// style 선언 ////////
const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-left: 2rem;

  `;
const RightPanel = styled.div`
  aspect-ratio: 1/2;
  position: relative;
  cursor: pointer;
  width: 20rem;
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
  padding: 1px;
`;

const SLink = styled(Link)`
  color: gray;
  text-decoration: none;
  padding: 1rem;
  border-bottom: 3px solid rgba(200, 200, 200, 1);

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