Just to be funny :)

**Problem**: Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei). 
What is the min number of romms needed to schedule all the meetings?

**Examples**:
Input: [2, 10], [3, 4], [6, 9]
Output: 2

Input: [1, 3], [2, 4], [2, 5], [3, 4], [3, 6], [4, 5], [5, 6]
Output: 4

**Solution**: Create rooms list consisting of rooms of meetings. Each meeting is and array of 2 numbers (start and end). Start with an empty room list, will iteratively add meeting to a room which is free within the meeting period, else will create a new room and push the meeting there. 

**How to Run**
`npm i`
`npm run start`