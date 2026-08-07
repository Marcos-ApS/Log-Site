import Icon from "./Icon";

export default function Navbar({ onMenu, onLogout }) {
  return (
    <header className="navbar">
      <button className="icon-button menu-button" onClick={onMenu} aria-label="Abrir menu"><Icon name="menu" /></button>
      <div className="search"><Icon name="search" size={16} /><input placeholder="Pesquisar..." /></div>
      <div className="navbar-actions">
        <span className="online"><i />Online</span>
        <button className="icon-button" aria-label="Notificações"><Icon name="bell" /></button>
        <button className="avatar avatar-button" onClick={onLogout} aria-label="Sair do sistema" title="Sair">OP</button>
      </div>
    </header>
  );
}
