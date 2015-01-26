// This is a test harness for TiFlurry

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// write your module tests here
var tiflurry = require('com.stepupsoftware.tiflurry');
Ti.API.info("module is => " + tiflurry);

tiflurry.setContinueSessionMillis(5000);

// logUncaughtExceptions must be caught before startSession
tiflurry.logUncaughtExceptions(true);

tiflurry.startSession("Your Flurry API Key");

// The following 4 do nothing on Android
tiflurry.setSessionReportsOnCloseEnabled(true);
tiflurry.setSessionReportsOnPauseEnabled(true);
tiflurry.setSecureTransportEnabled(true);

tiflurry.logEvent("myEvent");
    tiflurry.logEvent('myEvent', {key: 'value'});
    tiflurry.logEvent('myTimedEvent', {key: 'value'}, true); // for timed event
	tiflurry.endTimedEvent('myTimedEvent');

	
tiflurry.logPageView();

tiflurry.logError("error id", "message");

tiflurry.setUserID("123");

tiflurry.setAge(19);
tiflurry.setGender("f");
tiflurry.setGender("m");

tiflurry.setLogEnabled(false);
tiflurry.onEndSession();

Ti.API.info("test completed");

