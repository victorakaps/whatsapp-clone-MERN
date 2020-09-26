import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars3.githubusercontent.com/u/49690593?s=460&u=2a8dac134c4687ca1ec0f611d8b8c7c50c3c61ce&v=4" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <div className="sidebarChat">
          <Avatar src={"https://p16.resso.app/img/tos-alisg-i-0000/8d3b85c6ccac4c30b9637e0709f77b84~tplv-crop-center:150:150.webp"} />
          <div className="sidebarChat__info">
            <h2>Victor</h2>
            <p>typing...</p>
          </div>
        </div>
        <div className="sidebarChat">
          <Avatar />
          <div className="sidebarChat__info">
            <h2>Vinay</h2>
            <p>alright</p>
          </div>
        </div>
        <div className="sidebarChat">
          <Avatar
            src={
              "https://p16.resso.app/img/tos-alisg-i-0000/b39aaa371b49417795d9f0b42f800f31~tplv-crop-center:150:150.webp"
            }
          />
          <div className="sidebarChat__info">
            <h2>John Doe</h2>
            <p>Good Night</p>
          </div>
        </div>
        <div className="sidebarChat">
          <Avatar
            src={
              "https://scontent.fslv1-1.fna.fbcdn.net/v/t1.0-1/p320x320/105455662_107039037734991_2588983272577763726_n.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_ohc=ZFPhiDt-uUIAX-D7ciz&_nc_ht=scontent.fslv1-1.fna&tp=6&oh=0d07e5a4bbf56a8133f46e444a5133c7&oe=5F93117F"
            }
          />
          <div className="sidebarChat__info">
            <h2>Trisha</h2>
            <p>yes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
