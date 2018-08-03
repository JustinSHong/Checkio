# Task Description:
# For the input of your function will be given one sentence.
# You have to return its fixed copy in a way so it’s always starts with a capital letter and ends with a dot.
# Pay attention to the fact that not all of the fixes is necessary.
# If a sentence already ends with a dot then adding another one will be a mistake.

def correct_sentence(str):
	if str[0] != str[0].upper():
		str = str[0].upper() + str[1:]

	if str[-1] != ".":
		str += "."

	return str

# Test Cases:
correct_sentence("greetings, friends"); # "Greetings, friends."
correct_sentence("Greetings, friends"); # "Greetings, friends."
correct_sentence("Greetings, friends."); # "Greetings, friends."
correct_sentence("hi"); # "Hi."
correct_sentence("welcome to New York"); # "Welcome to New York."