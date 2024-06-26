import React from "react";
import ChatComp from "../componentes/chat"
import Menu from "../componentes/menu";
import "./style.css";

export default function Chat() {
  return (
    <main className="container-chat">
      <Menu active={"chat"} currentRoute={"/chat"}/>
      <div className="perfil">
        <div className="chat-menu">
          <input type="text" className="chat-menu__pesquisa" placeholder="Pesquisar..." />
          <button className="chat-menu__novo-chat">Novo Chat</button>
        </div>
      </div>
      <div className="chat">
          <ChatComp ></ChatComp>
      </div>
    </main>
  );
}
