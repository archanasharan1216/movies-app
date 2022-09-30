import { TabPanel, Tabs } from "react-tabs";
import styled from "styled-components";

export const MoviesContainer = styled.div`
  background-color: #232323;
  min-height: 25rem;
  margin: 20px;
  margin-top: 10px;
  padding-top: 2px;
  margin-bottom: 0;
`;

export const TabControl = styled.div`
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

export const TabsDiv = styled(Tabs)`
  ul {
    margin: 3%;
  }
  li {
    background: none;
    border: none;
    color: white;
    font-family: system-ui;
  }
`;

export const PanelControl = styled(TabPanel)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MoviesSortControl = styled.span`
  float: right;
  select {
    background: transparent;
    color: white;
    border: none;
    margin-left: 25px;
    font-weight: bold;
    font-family: system-ui;
    cursor: pointer;
  }

  label {
    font-family: system-ui;
  }
`;
