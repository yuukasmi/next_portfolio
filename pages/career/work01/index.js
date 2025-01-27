import Head from 'next/head'
import Image from 'next/image'
import Layout, {siteTitle} from '../../../components/layout'
import homeStyles from '../../../styles/home.module.scss'
import '../../../styles/profile.module.scss'
import Link from 'next/link'
import AnchorLink from "react-anchor-link-smooth-scroll";
import ReactTextTransition, { presets } from "react-text-transition";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Slider from "react-slick";


const name = 'yuuka shimai'

export default function Profile() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    initialSlide: 0,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true
        }
      }
    ]
  };
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="l_container">
        <main>
          <section id="profile" className={`${homeStyles.secProfile} secProfile`}>
            <div className={homeStyles.profile__bg}></div> 
            <div className={`${homeStyles.profile__inner} profile__inner u-inner u-cf`} >
              <h2 className={`${homeStyles.profile__tit} c-head01 u-font-times`} data-aos="fade-up" data-aos-duration="2000">CAREER</h2> 
              <div className={homeStyles.profile__areaLabelTxt}>
                {/* <div className={homeStyles.profile__areaLabel} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1100">
                  <Image src="/static/image/top/profile.jpg" layout="intrinsic" width={600} height={602} alt={name}/>
                </div>  */}
                <div className={`${homeStyles.profile__areaTxt} profile__areaTxt`}>
                  <ul className={homeStyles.profile__list}>
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__name}>島居 夕歌　<span className={homeStyles.profile__nameEn}>YUKA SHIMAI</span></span><br />フロントエンドエンジニア</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>1995年</span><br />シンガポールにて出生。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2008年</span><br />香港日本人学校大埔校 卒業<br />父親の仕事の関係により小学生の時代を香港で過ごす。たくさんの同じ境遇の日本人に囲まれながら日々楽しく暮らす。英語が堪能な現地の香港人とは片言の英語で会話。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2011年</span><br />私立四條畷学園中学校 普通科 卒業<br />小学卒業後日本に帰国し中学時代は、ソフトボール部に入部し365日毎日ソフトボールに打ち込む。中学3年時に大阪大会で優勝したが近畿大会で惜しくも敗退し夢の全国大会へは行けずだったがたくさんの素晴らしい仲間に出会う。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2014年</span><br />私立四條畷学園高等学校 特進文理科 卒業<br />特進クラスでは朝9時から18時まで毎日勉強の日々。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2015年</span><br />NIC International School in Japan　卒業<br />大阪にある1年の留学準備機関にて大量の課題やプレゼンテーション、ディスカッションなどアメリカの大学生活で生きていく術を身につける。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2018年</span><br />Diablo Valley College 卒業<br />アメリカ、サンフランシスコの短期大学にて経済学を専攻。シリコンバレーという地に集まるたくさんのプログラミング好きの仲間に出会い、初めてプログラミンにに触れる。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2017年</span><br />日本に帰国後、サンフランシスコにてプログラミング好きの仲間に出会ったことをきっかけにWEBの世界に惹かれプログラマーを目指す。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000">0から技術を習得するべくWEB制作会社に入社後、コーディング、CMS組み込み作業に没頭しフロントエンドエンジニアとして成長。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000">その後フォーム構築やデータベース等、WEBサイト制作においての幅広い知識に触れ、現在はReact(Next.js)やLaravel等のワンランク上のスキルを磨きながら日々より良いモノ作りのため勉強中。</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* #profile */}
          <section id="works" class="works">
            <div className={homeStyles.works__inner}>
              <h2 className={`${homeStyles.works__tit} c-head01 u-font-times`} data-aos="fade-up" data-aos-duration="2000">WORKS</h2> 
              <div className={`${homeStyles.works__areaList} u-inner`}>
                <ul className={homeStyles.works__list}>
                  <Slider {...settings}>
                    <li className={`${homeStyles.works__item} agile__slide`}><Link href="https://www.oneship.biz/"><a className={homeStyles.works__link} target="_blank"><div className={homeStyles.works__item__img}><Image src="/static/image/top/works01.png" layout="intrinsic" width={560} height={400} alt=""></Image></div> <div className={homeStyles.works__item__areaTxt}><p className={homeStyles.works__item__txt}>#HTML #CSS #PHP #JQuery #Ajax #Azure</p></div></a></Link></li>
                    <li className={`${homeStyles.works__item} agile__slide`}><Link href="https://yakujinryuoh.com/"><a className={homeStyles.works__link} target="_blank"><div className={homeStyles.works__item__img}><Image src="/static/image/top/works02.jpg" layout="intrinsic" width={560} height={400} alt=""></Image></div> <div className={homeStyles.works__item__areaTxt}><p className={homeStyles.works__item__txt}>#HTML #CSS #PHP #JQuery #SNS API連携</p></div></a></Link></li>
                    <li className={`${homeStyles.works__item} agile__slide`}><Link href="https://shintora.co.jp/"><a className={homeStyles.works__link} target="_blank"><div className={homeStyles.works__item__img}><Image src="/static/image/top/works03.jpg" layout="intrinsic" width={560} height={400} alt=""></Image></div> <div className={homeStyles.works__item__areaTxt}><p className={homeStyles.works__item__txt}>#HTML #CSS #PHP #JQuery #WordPress #blog</p></div></a></Link></li>
                    <li className={`${homeStyles.works__item} agile__slide`}><Link href="http://yshimai321.xsrv.jp/todos/todos/"><a className={homeStyles.works__link} target="_blank"><div className={homeStyles.works__item__img}><Image src="/static/image/top/works04.jpg" layout="intrinsic" width={560} height={400} alt=""></Image></div> <div className={homeStyles.works__item__areaTxt}><p className={homeStyles.works__item__txt}>#個人開発 #TodoList #Nuxt.js #Firebase</p></div></a></Link></li>
                    <li className={`${homeStyles.works__item} agile__slide`}><Link href="http://yshimai321.xsrv.jp/contact/"><a className={homeStyles.works__link} target="_blank"><div className={homeStyles.works__item__img}><Image src="/static/image/top/works05.jpg" layout="intrinsic" width={560} height={400} alt=""></Image></div> <div className={homeStyles.works__item__areaTxt}><p className={homeStyles.works__item__txt}>#個人開発 #お問い合わせフォーム #Laravel #Bootstrap</p></div></a></Link></li>
                    <li className={`${homeStyles.works__item} agile__slide`}><Link href="http://yshimai321.xsrv.jp/"><a className={homeStyles.works__link} target="_blank"><div className={homeStyles.works__item__img}><Image src="/static/image/top/works06.jpg" layout="intrinsic" width={560} height={400} alt=""></Image></div> <div className={homeStyles.works__item__areaTxt}><p className={homeStyles.works__item__txt}>#個人開発 #ポートフォリオ #Nuxt.js #BEM #FLOCSS</p></div></a></Link></li>
                  </Slider>
                </ul>
              </div> 
              <div className={homeStyles.works__bg}></div>
            </div>
          </section>
          {/* #works */}
         
          <div className={`${homeStyles.profile__topBtn} c-btn01`} data-aos="fade-up" data-aos-duration="2000">
            <Link href="/">
              <a>BACK TO TOP</a>
            </Link>
          </div>
         
          <section id="contact" className={homeStyles.contact}>
            <div  className={`${homeStyles.contact__inner} u-inner`} data-aos="fade-up" data-aos-duration="2000">
              <a href="/contact/" target="_blank">
                <div className={homeStyles.contact__areaContact}>
                  <h2  className={`${homeStyles.contact__tit} u-font-times`} data-aos="fade-up" data-aos-duration="2000">CONTACT</h2> 
                  <p className={homeStyles.contact__txt} data-aos="fade-up" data-aos-duration="2000">こちらからお問い合わせください</p>
                </div>
              </a>
            </div>
          </section>
          {/* contact */}

        </main>
        <style jsx>{`

        `}</style>
      </div>
    </Layout>
  )
}
