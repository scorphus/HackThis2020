import requests
from bs4 import BeautifulSoup

# query = "Geometry"

def GoogleLinkScraper(query):
    url = "https://www.google.com/search?q=" + query
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'html.parser')
    src_list = []
    url_list = []
    counter = 0
    for a in soup.find_all('a'):
        if (counter == 3):
            break
        s = a['href']
        if (s.find("https://") != -1 and s[7] == 'h'):
            # Link
            link = s[7:].split("&")[0]
            source = link.split("/")[2]
            
            # we already have the link to Wikipedia so filter that out
            if (source not in src_list and "wikipedia" not in link):
                url_list.append(link)
                src_list.append(source)
                counter += 1
    return url_list

# print(GoogleLinkScraper("Geometry"))