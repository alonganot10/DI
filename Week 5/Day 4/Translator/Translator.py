from translate import Translator


with open('text.txt') as f:
    text = f.readlines()

translator = Translator(to_lang="he")
for line in text:
    translation = translator.translate(line)
    print(translation)
