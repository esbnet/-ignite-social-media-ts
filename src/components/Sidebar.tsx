import styles from "./Sidebar.module.css";

import {Avatar} from './Avatar.js'

import { PencilLine } from 'phosphor-react'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8OTc2ODY3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="cover from profile"
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/esbnet.png"/>
                <strong>Edmilson Soares</strong>
                <span>Full Stack Developer</span>
            </div>
            <footer>
                <a href={'#'}>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}