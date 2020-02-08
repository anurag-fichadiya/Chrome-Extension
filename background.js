 // Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
chrome.browserAction.onClicked.addListener(function (tab) 
{
  let name = document.getElementsByClassName("a-size-medium a-color-base a-text-normal");
  let name_text = name.innerText; 
  name.addEventListener("click", fn())
  function fn()
  {
    name.innerText = "Hello"
  }
});
*/

/*'use strict'
//chrome.browserAction.setPopup("Hello");
chrome.runtime.onInstalled.addListener(function() 
{
  //chrome.storage.sync.set({color: '#3aa757'}, function() {
  //  console.log('The color is green.');
  //});
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function()
  {
    console.log("Inside check");
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {pathEquals: 'https://www.flipkart.com/viewcart?otracker=PP_GoToCart'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
*/
chrome.runtime.onInstalled.addListener(function(details)
{
  console.log("in back");
  console.log(document.querySelectorAll("._3ycxrs._2Rwa71"))
  var rule1 = {
    conditions: [
      new chrome.declarativeContent.PageStateMatcher({
        // See declarativeContent docs for more options
        pageUrl: { pathEquals : 'https://www.flipkart.com/viewcart?otracker=PP_GoToCart' },
      })
    ],
    actions: [ new chrome.declarativeContent.ShowPageAction() ]
  };

  // Remove existing rules, if any
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function()
  {  
    // Then, add our rule1
    console.log("in back"); 
    var a = document.querySelectorAll("._3ycxrs._2Rwa71");
    console.log(a)
    chrome.declarativeContent.onPageChanged.addRules([rule1]);
  });
});
