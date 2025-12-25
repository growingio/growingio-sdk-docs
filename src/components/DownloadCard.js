import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './DownloadCard.module.css';

const sdkData = {
  details: [
    { label: "SDK名称", value: "GrowingIO HarmonyOS SDK" },
    { label: "包名", value: "@growingio/analytics" },
    { label: "版本号", value: "2.7.0" },
    { label: "更新日期", value: "2025-12-26" },
    { label: "SDK大小", value: "xx.xMB" },
    { label: "md5值", value: "xxxxxxxxxxxxxxxxxxxxxxxxxx" },
    { label: "开发者", value: "北京易数科技有限公司" },
  ],
  privacyPolicy: {
    label: "隐私协议",
    text: "GrowingIO 个人信息隐私条款",
    link: "https://accounts.growingio.com/user-privacy"
  },
  compliance: {
    label: "合规指南",
    text: "GrowingIO HarmonyOS SDK 合规说明",
    link: "https://growingio.github.io/growingio-sdk-docs/knowledge/compliance/harmonyosCompliance"
  },
  downloadLink: "https://repo.harmonyos.com/ohpm/@growingio/analytics/-/analytics-2.7.0.har"
};

export default function DownloadCard() {
  return (
      <main className={styles.downloadContainer}>
        <div className={styles.sdkCard}>
          <div className={styles.infoList}>
            {sdkData.details.map((item, idx) => (
              <div key={idx} className={styles.infoItem}>
                <span className={styles.label}>{item.label}: </span>
                <span className={styles.value}>{item.value}</span>
              </div>
            ))}
            <div className={styles.infoItem}>
              <span className={styles.label}>{sdkData.privacyPolicy.label}: </span>
              <Link to={sdkData.privacyPolicy.link} className={styles.policyLink}>
                {sdkData.privacyPolicy.text}
              </Link>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>{sdkData.compliance.label}: </span>
              <Link to={sdkData.compliance.link} className={styles.policyLink}>
                {sdkData.compliance.text}
              </Link>
            </div>
          </div>
          <div className={styles.footerSection}>
            <Link className={styles.downloadBtn} to={sdkData.downloadLink}>
              立即下载
            </Link>
          </div>
        </div>
      </main>
  );
}