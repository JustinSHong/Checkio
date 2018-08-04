# Task Description:
# You are given a string where you have to find its first word.
# When solving a task pay attention to the following points:
# There can be dots and commas in a string.
# A string can start with a letter or, for example, a dot or space.
# A word can contain an apostrophe and it's a part of a word.
# The whole text can be represented with one word and that's it.

import re

def first_word(str):
	words = re.compile("[^a-zA-Z']").split(str)
	pattern = re.compile("[a-zA-Z]")
	for word in words:
		if word != "" and pattern.match(word):
			return word

# Test Cases:
first_word("Hello world") # "Hello"
first_word(" a word ") # "a"
first_word("don't touch it") # "don't"
first_word("greetings, friends") # "greetings"
first_word("... and so on ...") # "and"
first_word("hi") # "hi"
first_word("Hello.World") # "Hello"