"use strict";

async function feedbackPlugin(context, options) {
    return {
        name: 'atlassian-feedback-plugin',
        injectHtmlTags({ content }) {
            return {
                preBodyTags: [
                {
                  tagName: "script",
                  attributes: {
                    type: "text/javascript",
                    src: "https://growingio.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/-dtzt95/b/3/c95134bc67d3a521bb3f4331beb9b804/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?jsI18nTransformer=existing&locale=en-US&collectorId=d067cced",
                  },
                }
              ],
            };
        },
    };
}
exports.default = feedbackPlugin;