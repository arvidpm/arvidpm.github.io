(() => {

    //code added here runs when agent logs in
    ACE.JSApi.onScreenPop((popMsg) => {

        console.log('Screen pop event', popMsg);

        var callingNumber = popMsg.contact.contactData.ani;
        var agentName = popMsg.contact.contactData.agentName;
        var allowedAgents = ["tekj"];
        
        if (allowedAgents.includes(agentName)) {
    
            if (popMsg.popEvent == 'afterNormalAccept') {
        
                console.log('afterNormalAccept screenpop');
                console.log('A-number:' + callingNumber);
        
                //this opens an URL in a custom card inside ACE Interact, men det är beroende av inställningar på sidan som inkluderas (X-Frame-Options)
                // ACE.JSApi.openCustomContent({
                //     url: 'https://www.sosalarm.se',
                //     title: 'SOS Alarm',
                //     customCardId: 'web1'
                // });

                // var callingNumber = popMsg.contact.contactData.ani;
                // var applicationUrl = 'https://crmtest.sosalarm.local:8017/new-incoming-call?from='; // will need to fix hard coded url
                // var applicationEntryPoint = applicationUrl + callingNumber;

                // //this opens an URL in a new browser window, usually in a new tab but it depends on browser settings
                // window.open(applicationEntryPoint);
            }
            
            //agent can manually trigger events
            else if (popMsg.popEvent == 'manual') {
                console.log('manual screenpop');
            }
        }
    }); 
  })();