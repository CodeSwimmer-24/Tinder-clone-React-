import React from "react";
import "./Chats";
import Chat from "./Chat";
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="AbuBakr Siddik"
        message="RaziAllah Hu tala Anho "
        timestamp="5 Sec ago"
        profilepic="https://pbs.twimg.com/profile_images/507861096271577088/o2XqD1-j_400x400.jpeg"
      />
      <Chat
        name="Ummar bin Khattab"
        message="RaziAllah Hu tala Anho"
        timestamp="10 min ago"
        profilepic="https://pbs.twimg.com/profile_images/1331960450322485251/ng6RkAMr_400x400.jpg"
      />
      <Chat
        name="Usman bin Affan"
        message="RaziAllah Hu tala Anho"
        timestamp="12 houe ago"
        profilepic="https://www.samaa.tv/wp-content/uploads/2019/03/Manzoor-Mengal-640x480.jpg"
      />
      <Chat
        name="Ali bin Talib"
        message="RaziAllah Hu tala Anho"
        timestamp="2 month ago "
        profilepic="https://www.samaa.tv/wp-content/uploads/2020/12/Zar-Wali-Khan.jpg"
      />
    </div>
  );
}

export default Chats;
