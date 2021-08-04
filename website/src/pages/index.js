import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageSection from '../components/HomepageSection';
import SimpleCta from '../components/SimpleCta';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <img src={'../../static/img/logo.svg'} alt={siteConfig.title}/>
        <h1 className="hero__title text--white">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx('hero--button-wrapper', styles.heroButtonWrapper)}>
          <div className={styles.buttons}>
            <Link className="button button--primary button--outline button--lg" to="/docs/intro">DOCS</Link>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--primary button--outline button--lg" to="/newsletter">NEWSLETTER</Link>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--primary button--outline button--lg" to="/videos">VIDEOS</Link>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--primary button--outline button--lg" to="/staking">STAKING</Link>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--primary button--outline button--lg" to="/launchpad">LAUNCHPAD</Link>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--primary button--outline button--lg" to="/subscan">SUBSCAN</Link>
          </div>
        </div>
      </div>
      <div className={clsx('socials', styles.socials)}>
         <Link className="social_link" to="/"><img src={'../../static/img/logo-github.svg'} alt={"github"}/></Link>
         <Link className="social_link" to="/"><img src={'../../static/img/logo-twitter.svg'} alt={"twitter"}/></Link>
         <Link className="social_link" to="/"><img src={'../../static/img/logo-discord.svg'} alt={"discord"}/></Link>
         <Link className="social_link" to="/"><img src={'../../static/img/logo-instagram.svg'} alt={"instagram"}/></Link>
         <Link className="social_link" to="/"><img src={'../../static/img/mail-outline.svg'} alt={"mail"}/></Link>
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
          <Link className="button button--primary button--lg" to="#">
              PolkaHub
          </Link>
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
