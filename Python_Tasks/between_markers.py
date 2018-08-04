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

# Test Cases:
between_markers('What is >apple<', '>', '<') # 'apple'
between_markers('No[/b] hi', '[b]', '[/b]') # 'No'