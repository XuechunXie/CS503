var problems = [{
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

var ProblemModel = require('../models/problemModel');


var getProblems = function(){
    return new Promise((resolve,reject) => {
        //resolve(problems);
        ProblemModel.find({},function (err,problems){
            if (err){
                reject(err);
            }else{
                resolve(problems);
            }

        });
    });
}

var getProblem = function(id){
    return new Promise((resolve,reject) => {
        //resolve(problems.find((problem => problem.id === id)));
        ProblemModel.findOne({id: id},function (err,problem){
            if (err){
                reject(err);
            }else{
                resolve(problem);
            }
        });
    });
}

var addProblem = function (newProblem){
    return new Promise((resolve,reject) => {
        /*
        if(problems.find(problem => problem.name === newProblem.name)){
            reject('Problem already exists!')
        }else{
            newProblem.id = problems.length + 1;
            problems.push(newProblem);
            resolve(newProblem);
        }*/
        ProblemModel.findOne({name: newProblem.name},function (err,problem){
            if (problem){
                reject("Problem name already exists!");
            }else{
                ProblemModel.countDocuments({},function(err,num){
                    //assume that no deletion in DB
                    newProblem.id = num + 1;
                    var mongoProblem = new ProblemModel(newProblem);
                    //store the elem into database
                    mongoProblem.save();
                });
                resolve(problem);
            }
        });

    })
}
module.exports = {
    getProblems: getProblems,
    getProblem: getProblem,
    addProblem: addProblem,
}
