import React, { useEffect, useState } from "react";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import ReactGA from 'react-ga4'
const items = [
  {
    label: "Team Intro One",
    key: "Team1",
    icon: <TeamOutlined />,
  },
  {
    label: "Team Intro One",
    key: "Team2",
    icon: <TeamOutlined />,
  },
  {
    label: "Team Intro One",
    key: "Team3",
    icon: <TeamOutlined />,
  },
  {
    label: "ContactUs",
    key: "contact",
    icon: <UserOutlined />,
  },
];
const NavigationMenu = () => {
  const location = useLocation();
  // const [seconds,setSeconds] = useState();
  useEffect(() => {
    const TRACKING_ID = "G-M31J9NTE9X";
    ReactGA.initialize(TRACKING_ID, {
      gaOptions: {
        debug_mode: true,
      },
      gtagOptions: {
        debug_mode: true,
      },
    });
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: window.location.pathname + window.location.search,
    });
  }, [location.pathname]);

  const navigate = useNavigate();

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode='horizontal'
      items={items}
    />
  );
};
export default NavigationMenu;
