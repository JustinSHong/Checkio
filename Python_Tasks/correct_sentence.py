# Task Description:
# For the input of your function will be given one sentence.
# You have to return its fixed copy in a way so it’s always starts with a capital letter and ends with a dot.
# Pay attention to the fact that not all of the fixes is necessary.
# If a sentence already ends with a dot then adding another one will be a mistake.

# Test Cases:
correct_sentence("greetings, friends"); # "Greetings, friends."
correct_sentence("Greetings, friends"); # "Greetings, friends."
correct_sentence("Greetings, friends."); # "Greetings, friends."
correct_sentence("hi"); # "Hi."
correct_sentence("welcome to New York"); # "Welcome to New York."