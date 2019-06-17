import {Problem} from './models/problem.model';

export const PROBLEMS: Problem[] = [{
  id: 1,
  name: 'two sum',
  desc: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.' +
    'You may assume that each input would have exactly one solution, a' +
    'nd you may not use the same element twice.',
  difficulty: 'Easy'
},
  {
    id: 2,
    name: '3Sum',
    desc: 'Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? ' +
      'Find all unique triplets in the array which gives the sum of zero.Note The solution set must not contain duplicate triplets.',
    difficulty: 'medium'
  },
  {
    id: 3,
    name: '4Sum',
    desc: 'Given an array nums of n integers and an integer target, ' +
      'are there elements a, b, c, and d in nums such that a + b + c + d = target? ' +
      'Find all unique quadruplets in the array which gives the sum of target. ',
    difficulty: 'medium'
  },  {
    id: 4,
    name: 'Median of Two Sorted Arrays',
    desc: 'There are two sorted arrays nums1 and nums2 of size m and n respectively.\n' +
      'Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).\n',
    difficulty: 'hard'
  },
  {
    id: 5,
    name: 'Regular Expression Matching',
    desc: 'Given an input string (s) and a pattern (p), ' +
      'implement regular expression matching with support for \'.\' and \'*\'',
    difficulty: 'super'
  }];
