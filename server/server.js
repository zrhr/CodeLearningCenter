const express = require('express');
const path = require('path');

const app = express();
/*
{

        "id": 1,
        "lesson": "Console",
        "description": [
          "The console is a panel that displays important messages, like errors, for developers. Much of the work the computer does with our code is invisible to us by default. If we want to see things appear on our screen, we can print, or log, to our console directly.",
          "In JavaScript, the console keyword refers to an object, a collection of data and actions, that we can use in our code. One action, or method, that is built into the console object is the .log() method. When we write console.log() what we put inside the parentheses will get printed, or logged, to the console.",
          "On the right type 'console.log(\"Hello World\")' or 'console.log(\"World\")' to see the value printed to the console."
        ],
        "input": "World",
        "output": "Hello World\n",
      },
      
          */

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getInstructions', (req,res) => {
    const instructions = [
            { "id": 15,
             "lesson": "Objects",
             "description":[`function mostMoney(students) {
  // your code here
  if(students.length==1)
  return students[0].name
  let answer, max=0, all=true, first=true;
  let result={};
  for(let i = 0; i < students.length; i++)
  {
    result[students[i].name] = students[i].fives*5+students[i].tens*10+students[i].twenties*20;
  }
  for(name in result)
  {
   if (first===true)
   {
   console.log("first")
   max=result[name]
   answer=name
   first = false
   console.log(name)
   
   }
   else
   {
   if(result[name]!=max)
   {
     all=false;
   }
   
  if(result[name]>max)
   {
   console.log("hi")
     max = result[name]
     answer=name
     all=false;
   }
   
   }
  }
  if(all===false)
  return answer
  else
  return "all"
}`] "input": `array of Studentsclass Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}`,
        "output": "all\n",
      },
             ,
             
            {

        "id": 14,
        "lesson": "Mixed Fractions",
        "description": [
          `function mixedFraction(s){
  //your code hereif
  
  if(s===null)
  return null;
  
  numerator=s.split("/");
  var negativeFlag=false;
  denominator=numerator[1];
  numerator=numerator[0];
  if(denominator==0)
  throw ZeroDivisionError
  if(numerator.charAt(0)==='-')
  
  {
  numerator=Math.abs(numerator)
  if(denominator.charAt(0)!='-')
  negativeFlag=true;
  else
  denominator=Math.abs(denominator)
  }
  else
  {
  if(denominator.charAt(0)=='-')
  negativeFlag=true;
  denominator=Math.abs(denominator)
  }
  console.log(numerator,denominator)
   if(numerator==0)
  return '0';
if(numerator% denominator===0)
  return negativeFlag ? '-'+(numerator/denominator).toString(): (numerator/denominator).toString()
 var result=1;
 var integer=0; 
 var remainder=0;
  for(let i =denominator-1; i>0; i--)
  {


    if(numerator%i==0 && denominator%i==0 &&i!=1)
    {
    if(i>result)
    result=i;
    }
    if(parseInt(numerator)>denominator)
    {
      if((numerator-i)%denominator==0)
      {
      integer=(numerator-i)/denominator;
      if(i>remainder)
      remainder=i;
     
     }
      
    }
  }
  if (integer==0)
  {
  return negativeFlag ? '-'+(numerator/result).toString()+'/'+(denominator/result).toString(): (numerator/result).toString()+'/'+(denominator/result).toString()
  }
  else
  {
    return negativeFlag ? '-'+integer.toString()+' '+(remainder/result).toString()+'/'+(denominator/result).toString(): integer.toString()+' '+(remainder/result).toString()+'/'+(denominator/result).toString()
  }`
        ],
        "input": " -10/7",
        "output": "-1 3/7\n",
      },

        "id": 13,
        "lesson": "Find the missing number",
        "description": [`/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if(nums.length==0)
        return 0;

    let charMap={};
    for(let i =0; i<nums.length+1; i++)
        {
            charMap[i]=false;
        }
    for(let i =0; i<nums.length+1; i++)
        {
            charMap[nums[i]]=true;
        }
    let result;
    for(let i =0; i<nums.length+1; i++)
        {
            if(charMap[i]==false)
                result=i;
        }
    return result;
    
};` ],
        "input": "[0,1,2]",
        "output": "3",
      },
        {
       
        "id": 12,
        "lesson": "String suppattern recognition without repeating char",
        "description": [`function hasSubpattern(string){
  //your code here
  let queue=[];
  if(string.length>2)
  queue.push(string[0]);
  else 
  return false;
  let result=true;
  
  for(let i=1; i<string.length; i++)
  {console.log(string[i])
    if(string[i]==queue[0])
    {
     for(let j=1; j<queue.length; j++)
     { 
     
       if(string[i+1]!=queue[j])
       result=false;
       i++;
       console.log(string[i-1],"test")
     }
  
    }
    else{ 
    if (i+1==string.length)
    {
    console.log("end")
     result=false; 
    }
    else
      {
      queue.push(string[i])
      }
    }
  }
    return result  
}`],
        "input": "World",
        "output": "Hello World\n",
      },
        {
        "id": 11,
        "lesson": "Duplicate Encoder",
        "description": [`The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.`,
                        
         `function duplicateEncode(word){
    // I must look through string and find duplicates and then do it
    // I must first go to lower case.
    var j=word.toLowerCase();
    
    var x= "";
for(i=0; i<j.length; i++)
{
var indices = [];
var element = j[i];
var idx = j.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = j.indexOf(element, idx + 1);
}
if(indices[1])
x+=')';
else
x+='(';
}
return x;
}`
        ],
        "input": "Success",
        "output": ")())())\n",
      },
          {
        "id": 10,
        "lesson": "Anagram",
        "description": [
          `/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hashmap={};
    let result=true;
    if(s.length!=t.length)
        result=false;
    for(let i=0; i<t.length; i++)
        {
            let index=s.indexOf(t[i])
            console.log(index)
            if(index==-1)
                result=false
            else
             s=   s.replace(t[i].toString(), "")
                
            console.log(s)
            
        }
        return result;
};`
        ],
        "input": "World",
        "output": "Hello World\n",
      },
      {
        "id": 1,
        "lesson": "Console",
        "description": [
          "The console is a panel that displays important messages, like errors, for developers. Much of the work the computer does with our code is invisible to us by default. If we want to see things appear on our screen, we can print, or log, to our console directly.",
          "In JavaScript, the console keyword refers to an object, a collection of data and actions, that we can use in our code. One action, or method, that is built into the console object is the .log() method. When we write console.log() what we put inside the parentheses will get printed, or logged, to the console.",
          "On the right type 'console.log(\"Hello World\")' or 'console.log(\"World\")' to see the value printed to the console."
        ],
        "input": "World",
        "output": "Hello World\n",
      },
      {
        "id": 2,
        "lesson": "Contitionals - if statement",
        "description": [
          "We often perform a task based on a condition. For example, if the weather is nice today, then we will go outside. If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep.",
          "In programming, we can also perform a task based on a condition using an if statement: 'if (ball === red) { console.log('Red Ball')}' ",
          "In this exercise you have two variables named 'ball' and 'bounce' and if the input is 'bounce' then the ball will 'bounce'. Try it out, enter 'if (line === \"ball\") {console.log(\"bounce\")}'."
        ],
        "input": "ball",
        "output": "bounce\n",
      },
      {
        "id": 3,
        "lesson": "Array Property",
        "description": [
          "The length property of an array returns the length of an array (the number of array elements). The length property is always one more than the highest array index.",
          "Example: let fruits = [\"Banans\", \"Orange\", \"Apple\", \"Mango\"]; console.log(fruites.length); will output 4",
          "The length property treats strings the same as arrays. Try logging \"I Love JavaScript\" with the length property to test this."
        ],
        "input": "I Love JavaScript",
        "output": "17\n",
      },
      {
        "id": 4,
        "lesson": "String Disemvoweling",
        "description": [
          "Your boss says he wants to save space in all your email messages by getting rid of the vowels",
          "Your task is to write a function that takes a string and return a new string with all vowels removed. Use the input in the variable line and output the same string with all the vowels removed"
        ,
          "For example, the string \"This boss is the biggest loser LOL!\" would become \"Ths bss s th bggst lsr LL!\"."
        ],
        "input": "This boss is the biggest loser LOL!",
        "output": "Ths bss s th bggst lsr LL!\n",
      },
        {
        "id": 5,
        "lesson": "Binary Tree Level Order Traversal",
        "description": [`/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root===null)
        return []
    let queue=[]
    let counter=0;
    queue.push(root)
    let current
    let result=[]
    let holder=[]
    while(queue.length!=0){
        current=queue.pop();
        
        if(Math.pow(2,holder.length+1)==counter)
            {
                holder.push(result);
             result=[]
                counter=0;
            }
         result.push(current.val)
        counter+=2;
        if(current.right!=null){
            
            queue.push(current.right)}
        if(current.left!=null){
            
            queue.push(current.left)}
       
    }
    holder.push(result)
    return holder
};
        `],
        "input": "Just study the code,
        "output": "study the code",
      },
        {id: 6,
         lesson: `Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let result= new ListNode(0);
    if(l1==null || l2==null)
        return result

    let current1=l1;
    let current2=l2;
    let currentResult=result 
    while(current1!=null || current2!=null)
        {
            if (current1!=null && current2!=null)
                {
                    if( current1.val< current2.val)
                        {
                            
                         currentResult.val=current1.val
                         current1=current1.next   
                        }
                    else{
                        currentResult.val=current2.val
                        current2=current2.next
                    }
                
                }
            else if (current1==null)
                {
                    currentResult.val=current2.val;
                    current2=current2.next;
                }
            else if(current2==null)
                {
                    currentResult.val=current1.val;
                    current1=current1.next;
                }
                         currentResult.next=new ListNode();
                         currentResult=currentResult.next;   
        }
    
    return result
};`],
        "input": "Just study the code,
        "output": "study the code",
      },

        
        },
        
        {
        "id": 5,
        "lesson": "Matrix Zeroes",
        "description": [`
     /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if(matrix==null)
        return;
    let zeroes=[]
    for(let  i = 0; i<matrix.length; i++)
        {
            for(let j=0; j<matrix[0].length; j++)
                {
                    if(matrix[i][j]===0)
                        zeroes.push([i,j])
                }
        }
    
    while(zeroes.length!=0)
{
    let current=zeroes.pop();
    for( let i =0; i<matrix[0].length; i++)
        {
            matrix[current[0]][i]=0;
        }

    for( let i =0; i<matrix.length; i++)
        {
            matrix[i][current[1]]=0;
        }
}   `],
        "input": "Just study the code,
        "output": "study the code",
      },
        {id: 6,
         lesson: `There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible./**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //pairs are the edges of the graph
    
    var stack=[];
    if (numCourses==0 || prerequisites.length==0)
        return true;
    stack.push(prerequisites[0])
let current=[];
 let visited = []
 result =true;
  let  count=0;
    while(stack.length!=0)
        {
            current =stack.pop()
            console.log(current)
            count++;
            if(visited.indexOf(current[0])==-1)
            visited.push(current[1])
            else
                result=false;
            
            if(prerequisites.length>count)
                stack.push(prerequisites[count])
            
        }
    return result
};`],
        "input": "Just study the code,
        "output": "study the code",
      },

        
        }
        
    ];
    res.json(instructions);
    console.log('Sent list of instructions!');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'../client/build/index.html'));
});

const port = process.env.PORT ||  5000;
app.listen(port);

console.log('App is listening on port ' + port);
