import asyncio
from transformers import pipeline

classifier = pipeline('sentiment-analysis', 
                      model='finiteautomata/bertweet-base-sentiment-analysis')

# Helper function to perform sentiment analysis with classifier
async def classify(data):
    return classifier(data)

# Main function to split a paragraph into sentences and perform sentiment analysis individually
async def analyse_sentiment(data):
    paragraphs = [classify(sentence)
                  for sentence in data['content'].split(". ")]
    sentiment_result = await asyncio.gather(*paragraphs)
    sentiment_flattened = [sentiment for sentiment_list in sentiment_result
                                    for sentiment in sentiment_list]
    labels = [sentiment['label'] for sentiment in sentiment_flattened]
    scores = [sentiment['score'] for sentiment in sentiment_flattened]

    weights = {
        'POS' : 1,
        'NEG' : -1,
        'NEU' : 0
    }

    weighted_sum = sum(score * weights[label]
                       for label, score in zip(labels, scores))
    
    overall_sentiment = ''
    if weighted_sum == 0:
        overall_sentiment = 'NEUTRAL'
    elif weighted_sum >= 0:
        overall_sentiment = 'POSITIVE'
    else:
        overall_sentiment = 'NEGATIVE'
    
    return {
        'weighted_sum' : weighted_sum,
        'overall_sentiment' : overall_sentiment
    }