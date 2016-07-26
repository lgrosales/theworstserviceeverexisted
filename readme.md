# The Worst Service That Ever Existed 

The worst service ever existed is a nodejs module that returns random HTTP responses to POST requests.

# Install function in webtask

 - Install webtask CLI
npm install wt-cli -g

 - Init webtask
 wt init {YOUR_EMAIL_ADDRESS}

 - Deploy the function to webtask
wt create https://github.com/lgrosales/theworstserviceeverexisted/blob/master/randomresponse.js \ --name theworstserviceeverexisted