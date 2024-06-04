import React from 'react';
import './Tips.css';

function Tips() {
    return (
        <section id="tips">
            <h2>Exam Tips and Service Associations</h2>
            <div id="tipsContent">
                <h3>Service Associations</h3>
                <ul>
                    <li>Data Warehousing: <strong>Redshift</strong></li>
                    <li>NoSQL: <strong>DynamoDB</strong></li>
                    <li>Analytics: <strong>QuickSight</strong></li>
                </ul>
                <h3>General Tips</h3>
                <ul>
                    <li>Understand the Shared Responsibility Model.</li>
                    <li>Get hands-on practice with the AWS Free Tier.</li>
                    <li>Review the AWS Well-Architected Framework.</li>
                </ul>
            </div>
        </section>
    );
}

export default Tips;
