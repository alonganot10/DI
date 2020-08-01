import requests
from lxml import html


google = requests.get('https://news.google.com/rss?x=1571747254.2933&hl=en-US&gl=US&ceid=US:en')
doc = html.fromstring(google.content)