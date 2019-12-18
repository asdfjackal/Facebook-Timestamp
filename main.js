extractTimestamp = function(){

    chrome.tabs.executeScript(null, {
        file: "getTimestamp.js"
      }, function() {
      });

}

chrome.contextMenus.create({
    title: "Extract Timestamp",
    contexts:["page"],
    onclick: extractTimestamp
});

// /html/body/div[1]/div[3]/div[1]/div/div[2]/div[2]/div[2]/div[2]/div/div/div/div/div/div/div/div[1]/div/div[2]/div[1]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div/span[1]/span/a[1]/abbr
// /html/body/div[1]/div[3]/div[1]/div/div[2]/div[2]/div[2]/div[2]/div/div/div/div/div/div/div/div[1]/div/div[2]/div[1]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div/span[1]/span/a/abbr