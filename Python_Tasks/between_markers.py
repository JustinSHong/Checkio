# Task Description:
# You are given a string and two markers (the initial and final).
# You have to find a substring enclosed between these two markers.
# But there are a few important conditions:

# The initial and final markers are always different.
# If there is no initial marker then the beginning should be considered as the beginning of a string.
# If there is no final marker then the ending should be considered as the ending of a string.
# If the initial and final markers are missing then simply return the whole string.
# If the final marker is standing in front of the initial one then return an empty string.

# Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
# Output: A string.

import re

def between_markers(s, start, end):

	if not start in s and not end in s:
		return s
	elif start in s and not end in s:
		return s[s.index(start) + len(start):]
	elif not start in s and end in s:
		return s[0:s.index(end)]
	elif s.index(start) > s.index(end):
		return ""
	else:
		return s[s.index(start) + len(start):s.index(end)]

# Test Cases:
between_markers('What is >apple<', '>', '<') # "apple"
between_markers("<head><title>My new site</title></head>", "<title>", "</title>") # "My new site"
between_markers('No[/b] hi', '[b]', '[/b]') # 'No'
between_markers('No [b]hi', '[b]', '[/b]') # 'hi'
between_markers('No hi', '[b]', '[/b]') # 'No hi'
between_markers('No <hi>', '>', '<') # ''
