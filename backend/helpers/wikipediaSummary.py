import requests
from bs4 import BeautifulSoup
from gensim.summarization import summarize

text_p_count = 5
summarize_percent = 0.5

def generateWikipediaSummary(searchTerm):
    page = requests.get("https://en.wikipedia.org/w/index.php?search=%s" % searchTerm).text

    soup = BeautifulSoup(page, 'lxml')
    soup.find('h1').get_text()

    info = soup.find_all('p')
    info_array = []
    for i in range(text_p_count):    
        info_array.append(info[i].get_text().strip())

    sentence_list = [sentence for sentence in info_array if not '\n' in sentence]
    sentence_list = [sentence for sentence in sentence_list if '.' in sentence]
    article = ' '.join(sentence_list)

    # print(article)
    summary = summarize(article, ratio=summarize_percent)
    return summary

print(generateWikipediaSummary("Pythagorean_Theorem"))