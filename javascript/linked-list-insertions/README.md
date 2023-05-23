# Challenge Title
Write the following methods for the Linked List class:

append
arguments: new value
adds a new node with the given value to the end of the list

insert before
arguments: value, new value
adds a new node with the given new value immediately before the first node that has the value specified

insert after
arguments: value, new value
adds a new node with the given new value immediately after the first node that has the value specified

## Whiteboard Process
[image](../assets/linked-list-insertions.png)

## Approach & Efficiency
I took the approach of trying to cycle through the linked list until finding the node we wanted to append or insert in the proper location. Using while loops and a few if statements we can find where the nodes need to be placed

## Solution
[image](../assets/linked-list-insertions%20test.png)

## Collaboration

Thanks to Tum Maupin for the assist today

Thanks to chatgpt for helping with the testing 

prompts

please help me write a test for a linkedList that uses the below insertBefore code to ensure that a node is inserted before a node located in the middle of a linked list

for the above code can you please help me write a comprehensive list of tests for the following criteria, using javascript and I prefer to use 'it' over test
Unit Tests
Write tests for the following scenarios, and any other cases that help you ensure your code is working as expected.

Where k is greater than the length of the linked list
Where k and the length of the list are the same
Where k is not a positive integer
Where the linked list is of a size 1
“Happy Path” where k is not at the end, but somewhere in the middle of the linked list