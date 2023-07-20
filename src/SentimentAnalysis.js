import React, { useState } from 'react';
import Sentiment from 'sentiment';
// import userReviews from './MOCK_DATA.json'
import Table from 'react-bootstrap/Table'
import {MdVerified} from 'react-icons/md'

function SentimentAnalysis() {
  const userData = [
    {"id":1,"username":"ntwallin0","first_name":"Nelia","last_name":"Twallin","email":"ntwallin0@plala.or.jp","contact":"638-503-5253","location":"Yucun","occupation":"Desktop Support Technician","profile_photo":"https://robohash.org/optioquasicorrupti.png?size=120x120&set=set1","description":"bad mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in","paymentMade":true,"isActive":false,"isVerified":false},
{"id":2,"username":"awellman1","first_name":"Agneta","last_name":"Wellman","email":"awellman1@archive.org","contact":"229-341-2987","location":"Pau","occupation":"Automation Specialist III","profile_photo":"","description":"Good vitae consectetuer eget rutrum at lorem integer tincidunt ante","paymentMade":false,"isActive":false,"isVerified":false},
{"id":3,"username":"aspirit2","first_name":"Ardra","last_name":"Spirit","email":"aspirit2@wunderground.com","contact":"144-958-7302","location":"Huangjia","occupation":"Biostatistician II","profile_photo":"https://robohash.org/illumrecusandaeeum.png?size=120x120&set=set1","description":"quis libero nullam sit amet turpis elementum ligula recommend consequat morbi a","paymentMade":true,"isActive":true,"isVerified":false},
{"id":4,"username":"jvaux3","first_name":"Jada","last_name":"Vaux","email":"jvaux3@cbc.ca","contact":"102-889-9848","location":"Bojong","occupation":"Electrical Engineer","profile_photo":"https://robohash.org/quitemporamagni.png?size=120x120&set=set1","description":"eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet rapist","paymentMade":true,"isActive":false,"isVerified":false},
{"id":5,"username":"astonall4","first_name":"Annabella","last_name":"Stonall","email":"astonall4@narod.ru","contact":"476-809-4898","location":"Changbao","occupation":"Quality Engineer","profile_photo":"https://robohash.org/maximefugitimpedit.png?size=120x120&set=set1","description":"risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis","paymentMade":false,"isActive":false,"isVerified":true},
{"id":6,"username":"bpelerin5","first_name":"Bellanca","last_name":"Pelerin","email":"bpelerin5@gnu.org","contact":"278-660-0477","location":"Corail","occupation":"Information Systems Manager","profile_photo":"https://robohash.org/sintcorruptidignissimos.png?size=120x120&set=set1","description":"ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque","paymentMade":false,"isActive":false,"isVerified":false},
{"id":7,"username":"dflinders6","first_name":"Dian","last_name":"Flinders","email":"dflinders6@amazon.com","contact":"284-499-9359","location":"Hidalgo","occupation":"Occupational Therapist","profile_photo":"https://robohash.org/perferendiseaquae.png?size=120x120&set=set1","description":"suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non","paymentMade":false,"isActive":false,"isVerified":false},
{"id":8,"username":"mbarbe7","first_name":"Morris","last_name":"Barbe","email":"mbarbe7@mit.edu","contact":"912-682-9399","location":"Shijiazhuang","occupation":"Operator","profile_photo":"https://robohash.org/occaecativitaeeum.png?size=120x120&set=set1","description":"in lectus pellentesque at nulla suspendisse potenti cras in purus","paymentMade":false,"isActive":true,"isVerified":false},
{"id":9,"username":"pwiddowson8","first_name":"Pren","last_name":"Widdowson","email":"pwiddowson8@amazon.co.uk","contact":"112-158-6341","location":"Szemud","occupation":"Assistant Manager","profile_photo":"https://robohash.org/nisiquasid.png?size=120x120&set=set1","description":"vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra","paymentMade":false,"isActive":false,"isVerified":true},
{"id":10,"username":"npirdue9","first_name":"Nonna","last_name":"Pirdue","email":"npirdue9@wiley.com","contact":"345-795-3436","location":"Bor Tungge","occupation":"Cost Accountant","profile_photo":"https://robohash.org/consequaturmolestiaequia.png?size=120x120&set=set1","description":"etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus","paymentMade":false,"isActive":true,"isVerified":true}
  ];

  const [sentiment, setSentiment] = useState(null);

  const analzyeAllReviews = () => {
    const sentimentAnalyzer = new Sentiment();
    let totalScore = 0;
    let positiveWords = [];
    let negativeWords = [];

    for (const review of reviews) {
      const result = sentimentAnalyzer.analyze(review.review);
      totalScore += result.score;
      positiveWords = positiveWords.concat(result.positive)
      negativeWords = negativeWords.concat(result.negative)
    }

    const averageScore = totalScore / reviews.length;
    const percentage = Math.min(100, Math.max(0, Math.round(((averageScore + 5) / 10) * 100)));

    setSentiment({
      score: averageScore,
      percentage: percentage,
      positiveWords,
      negativeWords
    });
  }

  return (
    <div>
      <button onClick={analzyeAllReviews}>Analyze Sentiment</button>
      {sentiment !== null && (
        <div>
         <h4>Overall Sentiment Analysis</h4>
          <p>Score: {sentiment.score}</p>
          <p>Percentage: {sentiment.percentage}%</p>
          <p>Positive Words: {sentiment.positiveWords.join(', ')}</p>
          <p>Negative Words: {sentiment.negativeWords.join(', ')}</p>
          {sentiment.percentage >= 80 && <button>Passed</button>}
        </div>
      )}
      <Table>
        <thead>
         <tr>
              <th>Username</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>National ID</th>
              <th>Certificate</th>
              <th>Results</th>
              <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {userData.map((item) => (
              <tr key={item.id}>
                <td>{item.username}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.profile_photo}</td>
                <td>{item.certificate}</td>
                <td>{analzyeAllReviews(item)}</td>
                <td>
                  {item.isVerified ? <MdVerified size={20}/> : 'Not Verified'}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SentimentAnalysis