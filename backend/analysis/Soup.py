import requests
from bs4 import BeautifulSoup

class Soup:
    URL = 'https://www.metacritic.com/movie/'

    def __init__(self):
        pass

    def get_soup(self,url):
        r = requests.get(url, headers= {'User-agent': 'Mozilla/5.0'})
        return BeautifulSoup(r.content, 'html5lib')

    def get_user_reviews(self,title):
        url = self.URL+f'{title}/user-reviews?page='
        try:
            user_pages = self.get_soup(url+'0').find('li', class_='last_page').text
            user_pages.decode("utf-8").replace(u"\u2026", "").encode("utf-8")
        except AttributeError:
            user_pages = 1
        reviews = []
        for i in range(int(user_pages)):
            for result in self.get_soup(url+f'{i}').find_all('span', class_='blurb blurb_expanded'):
                reviews.append(result.text.strip())
        return(reviews)

    def get_critic_reviews(self,title):
        url = self.URL+f'{title}/critic-reviews'
        reviews = []
        for result in self.get_soup(url).find_all('a', class_='no_hover'):
            reviews.append(result.text.strip())
        return(reviews)

#s = Soup()
#print(s.get_user_reviews('star-wars-episode-ix---the-rise-of-skywalker'))
#print(s.get_critic_reviews('the-matrix'))
