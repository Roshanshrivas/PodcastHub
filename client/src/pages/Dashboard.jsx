import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PodcastCard from '../components/PodcastCard';

const DashboardMain = styled.div`
   padding: 20px 30px;
   padding-bottom: 200px;
   height: 100%;
   overflow-y: scroll;
   display: flex;
   flex-direction: column;
   gap: 20px;
   @media (min-width: 768px) {
   padding: 6px 10px; 
   }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
  }
 `;

const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
   @media (min-width: 768px) {
   font-size: 18px;
   }
`;

const span = styled.div`
   color: ${({ theme }) => theme.primary};
   font-size: 24px;
   font-weight: 400;
   @media (min-width: 768px) {
   font-size: 14px;
   }
`;

const Podcasts = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   gap: 14px;
   padding: 18px 6px;
   @media (max-width: 550px) {
    justify-content: center;
   }
`;


const Dashboard = () => {
  
  return (
    <DashboardMain>
       <FilterContainer>
          <Topic>
            Most Popular
            <Link to={`/showpodcasts/mostpopular`} 
                  style={{ textDecoration: "none"}}>
            <span>Show All</span>
            </Link>
          </Topic>
          <Podcasts>
            <PodcastCard/>
          </Podcasts>
       </FilterContainer>

       <FilterContainer>
          <Topic>
            Comedy
            <Link to={`/showpodcasts/comedy`} 
                  style={{ textDecoration: "none"}}>
            <span>Show All</span>
            </Link>
          </Topic>
          <Podcasts>
             <PodcastCard/>
             <PodcastCard/>
          </Podcasts>
       </FilterContainer>

       <FilterContainer>
          <Topic>
            News
            <Link to={`/showpodcasts/news`} 
                  style={{ textDecoration: "none"}}>
            <span>Show All</span>
            </Link>
          </Topic>
          <Podcasts>
             <PodcastCard/>
             <PodcastCard/>
          </Podcasts>
       </FilterContainer>

    </DashboardMain>
  )
};

export default Dashboard
