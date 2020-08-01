import requests
import time
from pprint import pprint


def track_iss():
    while True:
        resp = requests.get('http://api.open-notify.org/iss-now.json').json()
        print(resp['iss_position'])
        time.sleep(1)


def get_joke():
    resp = requests.get('https://api.chucknorris.io/jokes/random').json()
    pprint(resp['value'])


get_joke()