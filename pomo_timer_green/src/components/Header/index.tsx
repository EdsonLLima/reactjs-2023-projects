import { HeaderContainer } from './styles'
import logoPomoTimer from '../../assets/logo-pomo_timer_green.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoPomoTimer} alt="Dois tringulos em cor verde" />
      <nav>
        <a href="#">timer</a>
        <a href="#">history</a>
      </nav>
    </HeaderContainer>
  )
}
