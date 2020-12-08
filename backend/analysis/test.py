from Soup import Soup
from Movie import Movie

def main():
    input_list = ['the-matrix','hellboy']
    review_dict = {}
    for title in input_list:
        movie = Movie(title, Soup())
        movie.set_all_reviews()
        review_dict[title] = movie
        print(review_dict[title].get_all_reviews())

def

if __name__ == "__main__":
    main()
