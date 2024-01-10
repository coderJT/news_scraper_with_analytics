import math
import asyncio

from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer
from sumy.parsers.plaintext import PlaintextParser

# Helper function to perform Latent Semantic Analysis on a paragraph
def parse_and_summarize(target, language):
    parser = PlaintextParser.from_string(target, Tokenizer(language))
    summarizer = LsaSummarizer(Stemmer(language))
    summarizer.stop_words = get_stop_words(language)
    return parser, summarizer

# Main function
async def lsa_summarize(data, percentage=0.1, language='english'):
    target = data['content']
    # Find the maximum number of sentences to be generated
    max_length = math.ceil(len(target.split(". ")) * percentage)
    parser, summarizer = await asyncio.to_thread(parse_and_summarize, target, language)
    result = ""
    for sentence in summarizer(parser.document, max_length):
        result += str(sentence)
    return result

