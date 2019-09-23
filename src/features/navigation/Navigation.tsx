import React from "react";
import { useSize } from "features/size/useSize";
import styled from "styled-components";
import { SIZE } from "features/size/const";
import { Tabs } from "antd";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

const { TabPane } = Tabs;

const TopNavContainer = styled.div`
  padding-top: 56px;
`;

const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  display: flex;
  flex-flow: row nowrap;
  background-color: white;
`;

const TopNav: React.FC = props => {
  return (
    <div>
      <FixedContainer>Hello</FixedContainer>
      <TopNavContainer {...props}></TopNavContainer>;
    </div>
  );
};

const BottomNav = withRouter(({ location, history }) => {
  return (
    <Tabs
      activeKey={location.pathname}
      onChange={key => history.push(key)}
      tabPosition="bottom"
    >
      <TabPane tab="Tab 1" key="/">
        Home
      </TabPane>
      <TabPane tab="Tab 2" key="/create">
        Create
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
});

export const Navigation: React.FC = props => {
  const size = useSize();
  const show = useSelector(state => state && state.navigation.show);
  return size === SIZE.DESKTOP ? (
    <TopNav {...props} />
  ) : (
    <BottomNav {...props} />
  );
};
