import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/esbnet.png',
            name: 'Edmilson Soares',
            role: 'Full Stack Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-08-03 20:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernades',
            role: 'CTO @Rocketseat'
        },
        content: [
            { type: 'paragraph', content: 'Hi people 👋' },
            { type: 'paragraph', content: 'Outro post qualquer que pode ter diversas linhas por exemplo este parágrafo... bla, bla, bla...  bla, bla, bla...  bla, bla, bla...  bla, bla, bla...  bla, bla, bla...  bla, bla, bla...  bla, bla, bla...  bla, bla, bla...  bla, bla, bla...  bla, bla, bla...  bla, bla, bla...  bla, bla, bla...  bla, bla, bla... ' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-08-10 20:00:00')
    },
]

export function App() {

    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map( post => {
                        return <Post
                            id={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    })}
                </main>
            </div>
        </div>
    )
}
