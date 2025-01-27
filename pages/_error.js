import Head from 'next/head'
import Image from 'next/image'
import Layout, {siteTitle} from '../components/layout'
import styles from '../components/layout.module.scss'
import homeStyles from '../styles/home.module.scss'
import Link from 'next/link'



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="container">
          <div className="title">
            <p>お探しのページはございません。</p> 
            <div className="c-btn01" data-aos="fade-up" data-aos-duration="2000">
              <Link href="/">
                <a>BACK TO TOP</a>
              </Link>
            </div>
          </div>
      </div>
    <style jsx>{`
    .container{
        padding-top: 200px;
        color: #000;
        text-align: center;
    }
    `}</style>
    </Layout>
  )
}
