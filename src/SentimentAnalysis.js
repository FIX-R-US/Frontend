import React, { useState } from 'react';
import Sentiment from 'sentiment';

function SentimentAnalysis() {
  const reviews = [
    {
      review: "Sammy does really bad in programming. I strongly recommend. ",
    },
    {
      review: "Sammy does really bad in programming. I strongly recommend. ",
    },
    {
      review: "Sammy does really bad in programming. I strongly recommend. ",
    },
    {
      review: "Sammy does really bad in programming. I strongly recommend. ",
    },
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
    </div>
  );
}

export default SentimentAnalysis