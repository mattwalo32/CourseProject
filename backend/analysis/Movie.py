#from Soup import Soup

class Movie:

    def __init__(self, title, soup):
        self.title = title
        self.soup = soup
        self.user_reviews = []
        self.critic_reviews= []
        self.reviews = []
        self.user_review_count = 0
        self.critic_review_count = 0
        self.review_count = 0
        self.user_pages = 0
        self.critic_review_pages = 0

    def set_user_reviews(self):
        self.user_reviews = self.soup.get_user_reviews(self.title)
        self.user_review_count = len(self.user_reviews)

    def get_user_reviews(self):
        return self.user_reviews

    def get_user_review_count(self):
        return self.user_review_count

    def set_critic_reviews(self):
        self.critic_reviews = self.soup.get_critic_reviews(self.title)
        self.critic_review_count = len(self.critic_reviews)


    def get_critic_reviews(self):
        return self.critic_reviews

    def get_critic_review_count(self):
        return self.critic_review_count

    def get_all_reviews(self):
        return self.reviews

    def get_all_review_count(self):
        return self.review_count

    #Main Generator Method
    def set_all_reviews(self):
        self.set_user_reviews()
        self.set_critic_reviews()
        self.reviews = self.user_reviews + self.critic_reviews
        self.review_count = self.user_review_count + self.critic_review_count



#m = Movie('the-matrix', Soup())

#m.get_all_reviews()
#print(m.user_review_count,' ',len(m.user_reviews))
#print(m.critic_review_count,' ',len(m.critic_reviews))
#print(m.review_count,' ',len(m.reviews))
#print(m.reviews)
#print(m.critic_reviews)
#print(m.user_reviews)
