# Task Description:
# In this mission you should write a function that introduce a person with a given parameters in attributes.
# Input: Two arguments. String and positive integer.
# Output: String.

def say_hi(name, age):
	return "Hi. My name is {0} and I'm {1} years old".format(name, age)

# Test Cases:
say_hi("Alex", 32); # "Hi. My name is Alex and I'm 32 years old"
say_hi("Frank", 68); # "Hi. My name is Frank and I'm 68 years old"