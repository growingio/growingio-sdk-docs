import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '五年数据技术沉淀，研发实力深厚',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        首创无埋点等多项专利、10 亿级月活处理能力、支持 SaaS & 私有化部署，保障数据安全、实时、准确
      </>
    ),
  },
  {
    title: '系统专业的行业方案，将最佳实践赋能客户',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        行业增长经验丰富，帮助零售、运营商、保险、教育等多家行业标杆客户实践增长
      </>
    ),
  },
  {
    title: '数据智能闭环，专业咨询团队高效赋能',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        基于多个行业场景经验，全自动构建数据智能闭环，降低机器学习门槛，提升企业商业决策效率。已服务数百家企业的顶级行业专家、资深分析师，让数据产生业务价值
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
