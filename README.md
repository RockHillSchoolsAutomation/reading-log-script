# reading-log-script
Script to determine submitter role, as well as make book titles lowercase in an attempt to reduce duplicate entries.

## How it works
The code distinguishes user role by checking the email address for numbers. Student Google accounts have numbers, while teacher Google accounts don't.

The code also corrects book titles to lowercase to crack down on duplicate entries, improving the accuracy of the data regarding the books students are reading.

## How to install it
The code is a Google Apps Script that utilizes the integration between Google Sheets and Google Forms. To install it:

1. Make a Google Sheet and Google Form with the required Reading Log questions
2. On the sheet, put the title  "Role" (without quotations) in the first blank column's header (you can then drag the columns around to your preference, as the script iterates through column headers identifies the column number by the column header's text)
3. On the sheet, navigate to Tools > Script editor 
4. Clear out the default myFunction() 
5. Paste the ReadingDashboard() function from Code.gs on this repository into the Apps Script editor
6. Add a trigger to run ReadingDashboard "From spreadsheet" "On form submit" 
7. Accept the Google permissions request.

When a form is submitted, the script will run. It should take around 1 or 2 seconds to complete unless Google's Script servers are slow. Please do not delete or move the sheet's rows as that might affect active script instances.
