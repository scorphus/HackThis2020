import requests
from bs4 import BeautifulSoup

query = "Pythagorean Theorem"
url = "https://www.google.com/search?q=" + query

r = requests.get(url)
# print(r.status_code)

soup = BeautifulSoup(r.content, 'html.parser')

src_list = []
url_list = []
counter = 0
for a in soup.find_all('a'):
    if (counter == 3):
        break
    s = a['href']
    if (s.find("https://") != -1 and s[7] == 'h' and s.find("wikipedia") == -1):
        # Link
        link = s[7:].split("&")[0]
        source = link.split("/")[2]
        
        if (source not in src_list):
            url_list.append(link)
            src_list.append(source)
            counter += 1

wiki_url = 'https://en.wikipedia.org/wiki/' + query
url_list.append(wiki_url)

# print(url_list)

f = open("files/urls.txt", "w")
for url in url_list:
    f.write(url + '\n')