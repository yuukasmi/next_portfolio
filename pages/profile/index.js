import Head from 'next/head'
import Image from 'next/image'
import Layout, {siteTitle} from '../../components/layout'
import homeStyles from '../../styles/home.module.scss'
import '../../styles/profile.module.scss'
import Link from 'next/link'
import AnchorLink from "react-anchor-link-smooth-scroll";
import ReactTextTransition, { presets } from "react-text-transition";
import AOS from "aos";
import "aos/dist/aos.css";


const name = 'yuuka shimai'

export default function Profile() {
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
              <h2 className={`${homeStyles.profile__tit} c-head01 u-font-times`} data-aos="fade-up" data-aos-duration="2000">PROFILE</h2> 
              <div className={homeStyles.profile__areaLabelTxt}>
                <div className={homeStyles.profile__areaLabel} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1100">
                  <span className={homeStyles.profile__label}>
                    <Image src="/static/image/profile/profile.jpg" layout="intrinsic" width={600} height={602} alt={name}/>
                    <span>3歳</span>
                  </span>
                  <span className={homeStyles.profile__label}>
                    <Image src="/static/image/profile/profile01.jpg" layout="intrinsic" width={600} height={602} alt={name}/>
                    <span>中学生/クラブに明け暮れていた時期</span>
                  </span>
                  <span className={homeStyles.profile__label}>
                    <Image src="/static/image/profile/profile02.jpg" layout="intrinsic" width={600} height={602} alt={name}/>
                    <span>バイト代30万円を貯めて１ヶ月フィリピン留学</span>
                  </span>
                  <span className={homeStyles.profile__label}>
                    <Image src="/static/image/profile/profile08.jpg" layout="intrinsic" width={600} height={602} alt={name}/>
                    <span>アメリカ/ホストマザーや仲間に助けて頂きながら大学生活</span>
                  </span>
                  <span className={homeStyles.profile__label}>
                    <Image src="/static/image/profile/profile09.jpg" layout="intrinsic" width={600} height={602} alt={name}/>
                    <span>IT基礎の勉強からプログラマーの道を歩み始める</span>
                  </span>
                </div> 
                <div className={homeStyles.profile__areaTxt}>
                  <ul className={homeStyles.profile__list}>
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__name}>島居 夕歌　<span className={homeStyles.profile__nameEn}>YUKA SHIMAI</span></span></li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>1995年</span><br />シンガポールにて出生。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2008年</span><br />香港日本人学校大埔校 卒業<br />父親の仕事の関係により小学生の時代を香港で過ごす。たくさんの同じ境遇の日本人に囲まれながら日々楽しく暮らす。英語が堪能な現地の香港人とは片言の英語で会話。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2011年</span><br />私立四條畷学園中学校 普通科 卒業<br />小学卒業後日本に帰国し中学時代は、ソフトボール部に入部し365日毎日ソフトボールに打ち込む。中学3年時に大阪大会で優勝したが近畿大会で惜しくも敗退し夢の全国大会へは行けずだったがたくさんの素晴らしい仲間に出会う。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2014年</span><br />私立四條畷学園高等学校 特進文理科 卒業<br />特進クラスでは朝9時から18時まで毎日勉強の日々。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2015年</span><br />NIC International School in Japan　卒業<br />大阪にある1年の留学準備機関にて大量の課題やプレゼンテーション、ディスカッションなどアメリカの大学生活で生きていく術を身につける。<br />卒業後、アメリカへ出発までの３ヶ月バイト代を貯めてフィリピンに1ヶ月留学。ダバオにあるSeattle Language CenterにてTOEFLの点数を上げるために日々英語の勉強。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2018年</span><br />Diablo Valley College 卒業<br />アメリカ、サンフランシスコの短期大学にて経済学を専攻。シリコンバレーという地に集まるたくさんのプログラミング好きの仲間に出会い、初めてプログラミンにに触れる。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000"><span className={homeStyles.profile__year}>2017年</span><br />日本に帰国後、サンフランシスコにてプログラミング好きの仲間に出会ったことをきっかけにWEBの世界に惹かれプログラマーを目指す。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000">0から技術を習得するべくIT技術の基礎を学んだのち、WEB制作会社に入社し、コーディング、CMS組み込み作業に没頭しフロントエンドエンジニアとして成長。</li> 
                    <li className={`${homeStyles.profile__item}`} data-aos="fade-up" data-aos-duration="2000">その後フォーム構築やデータベース等、WEBサイト制作においての幅広い知識に触れ、現在はReact(Next.js)やLaravel等のワンランク上のスキルを磨きながら日々より良いモノ作りのため勉強。</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* #profile */}
          <section id="character" className={`${homeStyles.secCharacter} secCharacter`}>
            <div className={homeStyles.character__bg}></div> 
            <div className={`${homeStyles.character__inner} character__inner u-inner u-cf`} >
              <h2 className={`${homeStyles.character__tit} c-head01 u-font-times`} data-aos="fade-up" data-aos-duration="2000">CHARACTER</h2> 
              <div className={homeStyles.character__areaTxt}>
                <ul className={homeStyles.character__list}>
                  <li className={`${homeStyles.character__item}`} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200"><span className={homeStyles.character__num}>01</span><span className={homeStyles.character__listTit}>常に問題解決力と向上心を高めています</span><br />わからないことは放っておけず問題が解決する、あるいは改善策が見つかるまで原因を分析し模索することが得意です。そうすることで知識量が増えたり思考力が向上するため、常に考えることを忘れず励みます。</li> 
                  <li className={`${homeStyles.character__item}`} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400"><span className={homeStyles.character__num}>02</span><span className={homeStyles.character__listTit}>コミュニケーションを大事にしています</span><br />黙々と作業しがちなエンジニアの職ですがデザイナーさんやディレクターさん、周りの方々と協力し合いながら作業を進めることが大事だと考えています。<br />コミュニケーションの際は相手の意図や気持ちをよく汲み取りながらお互い気持ちの良いコミュニケーションができるよう心がけています。</li> 
                  <li className={`${homeStyles.character__item}`} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600"><span className={homeStyles.character__num}>03</span><span className={homeStyles.character__listTit}>人一倍、努力や行動をし続けます</span><br />中学、高校時代は成績で2番になることが多く、悔しい思いをすることが多かったので常にどうすれば上に行けるのかを考えていました。目標を見つけた際はロードマップや計画を立てまずは一歩始めてみることをモットーに何事も行動し続けてきました。</li> 
                </ul>
              </div>
            </div>
          </section>
          {/* #character */}
          <section id="hobby" className={`${homeStyles.hobby} hobby`}>
            <div className={homeStyles.hobby__bg}></div> 
            <div className={`${homeStyles.hobby__inner} hobby__inner u-inner u-cf`} >
              <h2 className={`${homeStyles.hobby__tit} c-head01 u-font-times`} data-aos="fade-up" data-aos-duration="2000">HOBBY</h2> 
              <div className={homeStyles.hobby__areaTxtImg}>
                <ul className={homeStyles.hobby__list}>
                  <li className={`${homeStyles.hobby__item}`} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200"><span className={homeStyles.hobby__listTit}>趣味は野球観戦、ドラマ鑑賞、言語学習（韓国語、中国語等）です。</span>特に、MLB LA Angelsの大谷翔平選手の大ファンで毎日試合結果や活躍は欠かさずチェックしています🤎</li> 
                  <li className={`${homeStyles.hobby__item}`} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">今では全米中にベーブルース以来、前例のなかった投手と打者の二刀流の選手として認知され、メジャー1年目には新人賞を獲得したりホームランを年間多数打ったりピッチャーとしても大活躍しています。</li> 
                  <li className={`${homeStyles.hobby__item}`} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">前例のないことにも諦めずに方法を模索する姿や、怪我した際でも人知れずコツコツと地道に毎日リハビリを続ける姿、驚くようなプレイで人々を魅きつける姿に日々刺激を受けています。いつ何時もポジティブに笑顔をたやさず周りからも愛される人柄にこちらも元気をもらいながら見習えるところは見習っていきたいと考えています。</li> 
                  <li className={`${homeStyles.hobby__item}`} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200"></li> 
                </ul>
                <div className={homeStyles.hobby__images} data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
                  <Image src="/static/image/profile/ohtanishohei2.jpeg" layout="intrinsic" width={904} height={600} alt={""}/> 
                </div> 
              </div>
            </div>
          </section>
          {/* #character */}
          <div className={`${homeStyles.profile__topBtn} c-btn01 profile__topBtn`} data-aos="fade-up" data-aos-duration="2000">
            <Link href="/">
              <a>BACK TO TOP</a>
            </Link>
          </div>
          <section id="contact" className={homeStyles.contact}>
            <div  className={`${homeStyles.contact__inner} u-inner`} data-aos="fade-up" data-aos-duration="2000">
              <a href="https://yshimai321.xsrv.jp/contact/" target="_blank">
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
