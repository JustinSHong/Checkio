# Task Description:
# A median is a numerical value separating the upper half of a sorted array of numbers from the lower half.
# In a list where there are an odd number of entities, the median is the number found in the middle of the array.
# If the array contains an even number of entities, then there is no single middle value,
# instead the median becomes the average of the two numbers found in the middle. For this mission, you are given a non-empty array of natural numbers (X).
# With it, you must separate the upper half of the numbers from the lower half and find the median.

import statistics

# Solution 2
def find_median(data):
	data.sort()
	print(data)
	midpoint = int(len(data) / 2)
	return (data[midpoint] + data[~midpoint]) / 2

# Solution 1
# def find_median(data):
# 	data = sorted(data)
# 	return statistics.median(data)

# Test Cases:
find_median([1, 2, 3, 4, 5]) # 3
find_median([3, 1, 2, 5, 3]) # 3
find_median([1, 300, 2, 200, 1]) # 2
find_median([3, 6, 20, 99, 10, 15]) # 12.5