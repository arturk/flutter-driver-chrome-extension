* About
I created it fast without paying too much attention to the code readability so I am sorry for that. I will fix it eventually when I have time and maybe improve a bit. Feel free to push your changes if you want, I will gladly review those.

This is a chrome plugin that will allow you to trigger tap, enterText and custom data handler commands against flutter driver extension running within the web flutter application in current tab. The output of data handling commands in application will be done to browser console so open that beforehand.
The commands are sent to data handler function within flutter driver extension as json encoded strings. So data handler function should parse the string for command and params.

* Installation
1. Chrome options (dots in the upper right corner) -> More Tools -> Extensions
2. Turn on Developer Mode in upper right corner.
3. CLick Load Unpacked button and select this folder.
4. For convenience move this extension to the quick bar for extensions from the Chrome Extensions menu button.
