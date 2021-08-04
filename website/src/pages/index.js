import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageSection from '../components/HomepageSection';
import SimpleCta from '../components/SimpleCta';

const ButonList = [
  {
    linkTitle: 'DOCS',
    link: '/docs/intro',
  },
  {
    linkTitle: 'NEWSLETTER',
    link: '/newsletter',
  },
  {
    linkTitle: 'VIDEOS',
    link: '/videos',
  },
  {
    linkTitle: 'STAKING',
    link: '/staking',
  },
  {
    linkTitle: 'LAUNCHPAD',
    link: '/launchpad',
  },
  {
    linkTitle: 'SUBSCAN',
    link: '/subscan',
  },
];

const SocialList = [
  {
    linkTitle: 'Github',
    link: '/',
    imgSrc: '../../static/img/logo-github.svg',
  },
  {
    linkTitle: 'Twitter',
    link: '/',
    imgSrc: '../../static/img/logo-twitter.svg',
  },
  {
    linkTitle: 'Discord',
    link: '/',
    imgSrc: '../../static/img/logo-discord.svg',
  },
  {
    linkTitle: 'instagram',
    link: '/',
    imgSrc: '../../static/img/logo-instagram.svg',
  },
  {
    linkTitle: 'Mail',
    link: '/',
    imgSrc: '../../static/img/mail-outline.svg',
  },
];

function Button({ linkTitle, link}) {
  return (
    <div className={styles.buttons}>
        <a className="button button--primary button--outline button--lg" href={link} title={linkTitle}>{linkTitle}</a>
    </div>      
  );
}

function Social({ linkTitle, link, imgSrc}) {
  return (
    <a className="social_link" href={link} title={linkTitle}><img src={imgSrc} alt={linkTitle}/></a>    
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <img src={'../../static/img/logo.svg'}  alt={siteConfig.title}/>
        <h1 className="hero__title text--white">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx('hero--button-wrapper', styles.heroButtonWrapper)}>
          {ButonList.map((props, idx) => ( <Button key={idx} {...props} />))}
        </div>
      </div>
      <div className={clsx('socials', styles.socials)}>
        {SocialList.map((props, idx) => ( <Social key={idx} {...props} />))}
        <p className="text--grey">© Polkadot.com · Privacy Policy · Terms and Conditions</p>
      </div>
    </section>
  );
}


function HomepageFooter() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={clsx('hero', )} style={{backgroundColor: "#f2f2f2", textAlign: "center"}}>
      <div className="container">
        <h2 className="hero__title">{siteConfig.title}</h2>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="#">PolkaHub</Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <SimpleCta />
        <HomepageSection />
      </main>
      <HomepageFooter />
    </Layout>
  );
}
