import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

def sentiment_analysis(movies):
    output = []
    for i in range(len(movies)):
        sentences = movies[i]["movie"].get_all_reviews()
        summ = 0
        sid = SentimentIntensityAnalyzer()
        size = len(sentences)
        for sentence in sentences:
            ss = sid.polarity_scores(sentence)
            summ += ss['compound']
        average = summ / size
        output.append([i, average])
    output.sort(key=lambda x:x[1])
    for key, item in enumerate(output):
        print('id : ', key, ' title : ', movies[key]["movie"], ' index : ', item[1])
