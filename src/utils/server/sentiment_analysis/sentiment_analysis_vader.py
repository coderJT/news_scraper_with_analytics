import nltk
import asyncio
from nltk.sentiment.vader import SentimentIntensityAnalyzer

nltk.download('vader_lexicon')

sid = SentimentIntensityAnalyzer()

async def classify(data):
    sentiment_scores = sid.polarity_scores(data)
    
    return [{'label': 'POSITIVE' if sentiment_scores['compound'] >= 0 else 'NEGATIVE',
             'score': sentiment_scores['compound']}]

async def analyse_sentiment(data):
    paragraphs = [classify(sentence)
                  for sentence in data['content'].split(". ")]
    
    sentiment_result = await asyncio.gather(*paragraphs)
    sentiment_flattened = [sentiment for sentiment_list in sentiment_result
                                    for sentiment in sentiment_list]
    
    labels = [sentiment['label'] for sentiment in sentiment_flattened]
    scores = [sentiment['score'] for sentiment in sentiment_flattened]

    weighted_sum = sum(scores)

    overall_sentiment = ''
    if weighted_sum == 0:
        overall_sentiment = 'NEUTRAL'
    elif weighted_sum > 0:
        overall_sentiment = 'POSITIVE'
    else:
        overall_sentiment = 'NEGATIVE'

    return {
        'weighted_sum': weighted_sum,
        'overall_sentiment': overall_sentiment
    }
