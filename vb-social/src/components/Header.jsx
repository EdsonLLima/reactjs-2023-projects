import style from "./Header.module.css";

import vbLogo from "../../public/virtualblue-logo.svg";

console.log(vbLogo);

export function Header() {
  return (
    <header className={style.header}>
      <img src={vbLogo} alt="Logotipo do Virtual Blue" />
    </header>
  );
}
