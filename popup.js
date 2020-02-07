// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

console.log('Inside Popup');

let name = document.getElementById("id_textarea")
//let name = document.querySelectorAll("._3ycxrs._2Rwa71")
let button = document.getElementById("id_button")

button.onclick = function f()
{
  name.innerText = 'Clicked!';
}


/*changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};*/
