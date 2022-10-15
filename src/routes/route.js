const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const checkstr=require("../validator/formatter")
const load=require("lodash")
const chunc1=require("lodash")
//importing external package
const underscore = require('underscore')
router.get('/test-me', function (req, res) {
const values=[1,2,3,4,3,2,6,7,9,5,5,2,1]
console.log(load.union(values))
const obj=[
  ["horror","shining"],
  ["dram","Titanic"],
  ["thriller","Shutter Island"],
  ["fantasy","Pans Labyrinth"]
]
console.log(load.fromPairs(obj))

   
  const arr=["jan","feb","march","april","may","jun","july","ogs","sep","oct","nov","dec"]
  const chunk=chunc1.chunk(arr,4)
  console.log(chunk)
  const tail=[1,3,5,7,9,11,13,15,17,19]
  const result=load.tail(tail)
  console.log(result)
  console.log(checkstr.trim())
  console.log(checkstr.lowercase())
  console.log(checkstr.uppercase())
  console.log(xyz.printdate())
  console.log(xyz.printmonth())
  console.log(xyz.getbatchinfo())

    res.send('My first ever api!')
});

module.exports = router;

