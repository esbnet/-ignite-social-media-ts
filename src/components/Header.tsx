import styles from './Header.module.css'

import Logo from '../assets/images/logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt='Logo do app' />
            <strong> Ignite Feed </strong>
        </header>
    )
}