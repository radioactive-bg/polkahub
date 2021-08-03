import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './SimpleCta.module.css';

class SimpleCta extends React.Component {
  render() {
    const background = {
      backgroundColor: "#f2f2f2",
      backgroundImage: "url('../../static/img/abstract.svg')",
      backgroundRepeat: "no-repeat",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto 250%",
      backgroundPosition: "center left",
      margin: "2rem 0 5rem 0",
      textAlign: "center",
    };
    return (
      <section className={clsx('hero', styles.heroBanner)} style={background}>
        <div className="container">
            <h2 className="hero__title">PolkaHub Documents!</h2>
            <p style={{marginBottom: "0"}}>Docusaurus lets you focus on your docs, and we'll do the chores.</p>
        </div>
      </section>
    );
  }
}
export default SimpleCta; 