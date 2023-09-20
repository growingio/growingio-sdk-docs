import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <div className="dropdown--hoverable" style={{position: 'relative'}}>
            <div className="button button--secondary button--lg">快速接入GrowingIO SDK</div>
            <div className="dropdown__menu" style={{top:'calc(100%)', left: '50%', transform: 'translateX(-50%)', minWidth: '30rem'}}> 
              <table> 
              <thead> 
                <tr> 
                <th style={{color:'var(--ifm-dropdown-link-color)'}}>平台版本</th>
                <th style={{color:'var(--ifm-dropdown-link-color)'}}>SDK版本</th>
                </tr>
              </thead> 
              <tbody> 
                <tr>
                <td style={{color:'var(--ifm-dropdown-link-color)'}}>OP-xxxx</td> 
                <td><Link to="docs">4.x</Link></td> 
                </tr> 
                <tr> 
                <td style={{color:'var(--ifm-dropdown-link-color)'}}>OP-13.6、OP-14.3.0、OP-2.0.0、OP-2.6.0、OP-2.7.0</td>
                <td><Link to="docs/3.x">3.x</Link></td>
                </tr>
              </tbody> 
              </table> 
              <Link to="docs#平台支持功能的版本与-sdk-版本对应关系">具体查看平台支持功能的版本与 SDK 版本对应关系</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`GrowingIO ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
