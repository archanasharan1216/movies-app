import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import AvailableMovies from './AvailableMovies';
import MoviesSort from './MoviesSort';

const TabControl = styled.div `
    color: white;
    width: 100%;

    TabList {
      border-bottom: none;
    }
    
    TabPanel {
      display: flex;
    }

    react-tabs__tab-panel {
      display: flex;
    }
`;

const TabsDiv = styled(Tabs)`
    ul{
      // border-bottom: 1px #424242;
      margin: 3%;
    }
    li {
      background: none;
      border: none;
      color: white;
      font-family: system-ui;
    }

`;

const PanelControl = styled(TabPanel) `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;


const MovieTab:React.FunctionComponent = () => {
    return(
      <TabControl> 
          <TabsDiv>
          <TabList>
            <Tab>ALL</Tab>
            <Tab>DOCUMENTARY</Tab>
            <Tab>COMEDY</Tab>
            <Tab>HORROR</Tab>
            <Tab>CRIME</Tab>
            <MoviesSort />
          </TabList>

          
          <PanelControl>
            <AvailableMovies /> 
       
          </PanelControl>
          <PanelControl>
            <h2>Documentary Movies</h2>
          </PanelControl>
          <PanelControl>
            <h2>Comedy Movies</h2>
          </PanelControl>
          <PanelControl>
            <h2>Horror Movies</h2>
          </PanelControl>
          <PanelControl>
            <h2>Crime Movies</h2>
          </PanelControl>
      </TabsDiv>
      </TabControl>
        
    )
}

export default MovieTab;
  