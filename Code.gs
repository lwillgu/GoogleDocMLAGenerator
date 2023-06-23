function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function doSomething(first,last,title,period,teacher) {
  Logger.log(title);
  Logger.log(period);
   Logger.log(teacher);
   Logger.log(first);
   Logger.log(last);
  var id = DriveApp.getFileById('1Un-w26mECnzfxPwj_KNWdyJhN4ABOks1HtE6MLCXIMg').makeCopy().getId();
  DocumentApp.openById(id).setName(title);
  var newp = period;
  var body = DocumentApp.openById(id).getBody();
    var header = DocumentApp.openById(id).getHeader();



// Create a copy of an existing date object.
var date = Utilities.formatDate(new Date(), "GMT-7", "dd MMMM yyyy")
  body.findText('Teacher').getElement().asText().setText(teacher);
  body.findText('Class').getElement().asText().setText(newp);
  body.findText('Date').getElement().asText().setText(date);
  body.findText('Title').getElement().asText().setText(title);
 header.findText('Last').getElement().asText().setText(last+' ');
  body.findText('Name').getElement().asText().setText(first+' '+last);


   return 'https://docs.google.com/document/d/'+id+'/edit';
      
}

function tests() {
  var now = new Date();

// Create a date object for a past date and time using a formatted string.

// Create a copy of an existing date object.
var date = Utilities.formatDate(new Date(), "GMT-7", "dd MMMM yyyy")

Logger.log(date);
}

function getScriptURL() {
  return ScriptApp.getService().getUrl();
}
