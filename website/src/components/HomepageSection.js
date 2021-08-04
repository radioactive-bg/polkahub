import React from 'react';
import clsx from 'clsx';
import styles from './HomepageSection.module.css';

const FeatureList = [
  {
    title: 'Focus on What Comes',
    link: '#',
    linkTitle: 'Read More',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    subdescription: (
      <>
        Docusaurus lets you focus on your docs, and we ll do the chores. 
      </>
    ),
  },
  {
    title: 'Focus on Us',
    link: '/docs/intro',
    linkTitle: 'PlkaHub Docs',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    subdescription: (
      <>
        Docusaurus lets you focus on your docs, and we ll do the chores. 
      </>
    ),
  },
];

function StreachFeature({Svg, title, description, subdescription, link, linkTitle}) {
  return (
    <div className={clsx('col col--12', styles.dflexContent)}>
      <div className={styles.leftSvgWrapper}>
        <Svg className={styles.leftSvg} alt={title} />
      </div>
      <div className={clsx('col', styles.paddingResponsiveXl)}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{subdescription}</p>
        <a className="button button--primary button--lg" href={link} title={linkTitle}>{linkTitle}</a>
      </div>
    </div>
  );
}

export default function HomepageSection() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <StreachFeature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
