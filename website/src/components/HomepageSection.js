import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageSection.module.css';

const FeatureList = [
  {
    title: 'Focus on What Comes',
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

function StreachFeature({Svg, title, description, subdescription}) {
  return (
    <div className={clsx('col col--12', styles.dflexContent)}>
      <div className={styles.leftSvgWrapper}>
        <Svg className={styles.leftSvg} alt={title} />
      </div>
      <div className={clsx('col', styles.paddingResponsiveXl)}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{subdescription}</p>
        <Link className="button button--primary button--lg" to="javascript:;">
            PolkaHub Doc
        </Link>
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
