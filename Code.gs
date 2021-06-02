function ReadingDashboard() {
  /*
  IMPORTANT! This script should be set to the OnFormSubmit trigger!
  Go to Edit > Current Project's Triggers > Add a new OnFormSumbit trigger.
  */
  
  // Dev editable variables
  var teacherOrStudent = "Role"; // What is the column header for the student / teacher role? (by default it is "Role")
  
  // Get the sheet and important rows.
  var mainSheet = SpreadsheetApp.getActiveSpreadsheet(),
      formSheet = mainSheet.getActiveSheet(),
      newDataRow = formSheet.getActiveCell().getRowIndex(),
      lastColumn = formSheet.getLastColumn(),
      headers = formSheet.getRange(1, 1, 1, lastColumn).getValues(),
      emailCol, titleCol, roleCol;
  
  // Get neccessary header data automatically
  for (var i=0;i<lastColumn-1;i++){
    if(headers[0][i].toLowerCase().indexOf("email address")>=0){
      emailCol = i+1;
    }
    if(headers[0][i].toLowerCase().indexOf("title")>=0){
      titleCol = i+1;
    }
    if(headers[0][i].toLowerCase().indexOf(teacherOrStudent.toLowerCase())>=0){
      roleCol = i+1;
    }
  }
  
  // Get this record's email and book title, initialize role variable
  var email = formSheet.getRange(newDataRow, emailCol).getValue(),
      title = formSheet.getRange(newDataRow, titleCol).getValue(),
      role;
  
  // Use email to select role
  if(/\d/.test(email)==true){role = "Student";}
  else{role = "Teacher";}
  formSheet.getRange(newDataRow, roleCol).setValue(role);
  
  // Make title lowercase to reduce duplicates of the same title
  formSheet.getRange(newDataRow, titleCol).setValue(title.toLowerCase());  
  
}
