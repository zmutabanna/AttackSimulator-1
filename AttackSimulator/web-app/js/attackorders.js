/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    
    function dateDiff(date1, date2){
        //Dates are in string format mm/dd/yyyy
        //date2 has to be less than date1
        if(date2.getFullYear() > date1.getFullYear()){
            return -1;
        }else if(date2.getFullYear() == date1.getFullYear()){
            if(date2.getMonth() > date1.getMonth()){
                return -1;
            }else if(date2.getMonth() == date1.getMonth()){
                if(date2.getDate() > date1.getDate()){
                    return -1;
                }else{
                    return 0;
                }
            }
        }
        return 0;
    }
    
    function checkStartDates(startdates){
        var today = new Date();
        var pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
        var date1 = new Date(startdates.replace(pattern, '$3/$1/$2'));
        var diff1 = dateDiff(date1, today);
        if(diff1 < 0){
            alert("We don't allow start dates, earlier than today");
            return false;
        }
        
        return true;
    }
    
    
    var rowcount = $("#attacktable tr").length;
    for(var i=1; i < rowcount; i++){
        $( "#from"+ i).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3,
            onClose: function( selectedDate ) {
                $( "#to"+i ).datepicker( "option", "minDate", selectedDate );
            }
        });

        
        
        $( "#to" + i).timepicker({
            // Options
            timeSeparator: ':',           // The character to use to separate hours and minutes. (default: ':')
            showLeadingZero: true,        // Define whether or not to show a leading zero for hours < 10.
            //                                 (default: true)
            showMinutesLeadingZero: true, // Define whether or not to show a leading zero for minutes < 10.
               //                              (default: true)
            showPeriod: false,            // Define whether or not to show AM/PM with selected time. (default: false)
            showPeriodLabels: true,       // Define if the AM/PM labels on the left are displayed. (default: true)
            periodSeparator: ' ',         // The character to use to separate the time from the time period.
            altField: '#alternate_input', // Define an alternate input to parse selected time to
            defaultTime: '12:34',         // Used as default time when input field is empty or for inline timePicker
                                          // (set to 'now' for the current time, '' for no highlighted time,
                  //                           default value: now)

            // trigger options
            showOn: 'focus',              // Define when the timepicker is shown.
                                          // 'focus': when the input gets focus, 'button' when the button trigger element is clicked,
                                          // 'both': when the input gets focus and when the button is clicked.
            button: null,                 // jQuery selector that acts as button trigger. ex: '#trigger_button'

            // Localization
            hourText: 'Hour',             // Define the locale text for "Hours"
            minuteText: 'Minute',         // Define the locale text for "Minute"
            amPmText: ['AM', 'PM'],       // Define the locale text for periods

            // Position
            myPosition: 'left top',       // Corner of the dialog to position, used with the jQuery UI Position utility if present.
            atPosition: 'left bottom',    // Corner of the input to position

            // Events
            //beforeShow: beforeShowCallback, // Callback function executed before the timepicker is rendered and displayed.
            //onSelect: onSelectCallback,   // Define a callback function when an hour / minutes is selected.
            //onClose: onCloseCallback,     // Define a callback function when the timepicker is closed.
            //onHourShow: onHourShow,       // Define a callback to enable / disable certain hours. ex: function onHourShow(hour)
            //onMinuteShow: onMinuteShow,   // Define a callback to enable / disable certain minutes. ex: function onMinuteShow(hour, minute)

            // custom hours and minutes
            hours: {
                starts: 0,                // First displayed hour
                ends: 23                  // Last displayed hour
            },
            minutes: {
                starts: 0,                // First displayed minute
                ends: 55,                 // Last displayed minute
                interval: 5,              // Interval of displayed minutes
                manual: []                // Optional extra entries for minutes
            },
            rows: 4,                      // Number of rows for the input tables, minimum 2, makes more sense if you use multiple of 2
            showHours: true,              // Define if the hours section is displayed or not. Set to false to get a minute only dialog
            showMinutes: true,            // Define if the minutes section is displayed or not. Set to false to get an hour only dialog

            // Min and Max time
//            minTime: {                    // Set the minimum time selectable by the user, disable hours and minutes
//                hour: minHour,            // previous to min time
//                minute: minMinute
//            },
//            maxTime: {                    // Set the minimum time selectable by the user, disable hours and minutes
//                hour: maxHour,            // after max time
//                minute: maxMinute
//            },
            
            // buttons
            showCloseButton: false,       // shows an OK button to confirm the edit
            closeButtonText: 'Done',      // Text for the confirmation button (ok button)
            showNowButton: false,         // Shows the 'now' button
            nowButtonText: 'Now',         // Text for the now button
            showDeselectButton: false,    // Shows the deselect time button
            deselectButtonText: 'Deselect' // Text for the deselect button
        });
        
        $("#attkorder"+i).click(function(event){
            event.preventDefault();
            //get all the attack details.
            var idstring = $(this).attr("id");
            var id = idstring.substring(9);
            var feedtype = $("#feedname"+id).text();
            var startdate = $("#from"+id).val();
            var time = $("#to"+id).val();
            var typeofattackid = $("#selectedattack"+id).val();
            var transactionfile = $("#selectedattack"+id+" option:selected").attr("transactionfilepath");
            var frequency = $("#frequency"+id).val();
            var attackerid = $("#selecteduser"+id).val();
            var username = $("#selecteduser"+id+" option:selected").text();
            var test = true;
            
//            console.log("The feedtype is : "+ feedtype);
//            console.log("The startdate is : "+ startdate);
//            console.log("The time is : "+ time);
//            console.log("The typeofattackid is : "+ typeofattackid);
//            console.log("The transactionfile is : "+ transactionfile);
//            console.log("The frequency is : "+ frequency);
//            console.log("The attackerid is : "+ attackerid);
//            console.log("The username is : "+ username);
            
            if(feedtype === null || feedtype === ""){
                test = false;
            }
            
            if(startdate === null || startdate === ""){
                test = false;
                alert("Please fill out the start date for the order");
            }
            
            if(!checkStartDates(startdate)){
                test = false;
                alert("We don't allow start dates earlier than today");
            }
            
            if(typeofattackid === null || typeofattackid === ""){
                test = false;
            }
            
            if(transactionfile === null || transactionfile === ""){
                test = false;
            }
            
            if(time === null || time === ""){
                test = false;
                alert("Time of attack needs to be filled");
            }
            
            if(frequency === null || frequency === ""){
                frequency = "0";
            }
            
            if(test){
                $.post("/AttackSimulator/AttackOrder/saveAttackOrder",
                {
                    startdate: startdate,
                    time: time,
                    typeofattackid: typeofattackid,
                    transactionfile: transactionfile,
                    frequency: frequency,
                    attackerid: attackerid,
                    username: username,
                    feedtype: feedtype
                },
                function(data){
                    console.log(data);
                    location.reload();
                });
            }
        });
    }
});
