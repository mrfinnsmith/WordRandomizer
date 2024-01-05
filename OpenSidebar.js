function openSidebar() {
    var html = HtmlService.createHtmlOutputFromFile('Sidebar')
        .setTitle('Word Randomizer')
        .setWidth(300);
    SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
        .showSidebar(html);
  }
  