import urllib.request
import json
import ssl
from bs4 import BeautifulSoup
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request(
    'https://lista.mercadolivre.com.br/relogio-de-ponto-control-id-idclass', 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)
try:
    html = urllib.request.urlopen(req, context=ctx).read()
    soup = BeautifulSoup(html, 'html.parser')
    img = soup.find('img', class_='ui-search-result-image__image')
    if img:
        img_url = img.get('data-src') or img.get('src')
        if img_url:
            print("Downloading Control ID:", img_url)
            urllib.request.urlretrieve(img_url, 'public/control_id.webp')
except Exception as e:
    print("Error:", e)

req2 = urllib.request.Request(
    'https://lista.mercadolivre.com.br/relogio-ponto-henry-super-facil', 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)
try:
    html2 = urllib.request.urlopen(req2, context=ctx).read()
    soup2 = BeautifulSoup(html2, 'html.parser')
    img2 = soup2.find('img', class_='ui-search-result-image__image')
    if img2:
        img_url2 = img2.get('data-src') or img2.get('src')
        if img_url2:
            print("Downloading Henry:", img_url2)
            urllib.request.urlretrieve(img_url2, 'public/henry.webp')
except Exception as e:
    print("Error:", e)
    
req3 = urllib.request.Request(
    'https://lista.mercadolivre.com.br/catraca-de-acesso-facial-control-id', 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)
try:
    html3 = urllib.request.urlopen(req3, context=ctx).read()
    soup3 = BeautifulSoup(html3, 'html.parser')
    img3 = soup3.find('img', class_='ui-search-result-image__image')
    if img3:
        img_url3 = img3.get('data-src') or img3.get('src')
        if img_url3:
            print("Downloading Catraca:", img_url3)
            urllib.request.urlretrieve(img_url3, 'public/catraca.webp')
except Exception as e:
    print("Error:", e)
