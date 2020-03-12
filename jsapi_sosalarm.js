(() => {

    //code added here runs when agent logs in
    ACE.JSApi.onScreenPop((popMsg) => {

        console.log('Screen pop event', popMsg);

        var allowedAgents = ["tekj", "hkrr"];
        var popEvent = popMsg.popEvent;
        var contact = popMsg.contact;

        if (contact != null && contact.contactData != null) {
            var callingNumber = popMsg.contact.contactData.Ani;
            var agentName = popMsg.contact.contactData.agentName;

            if (allowedAgents.includes(agentName)) {

                var applicationUrl = 'https://crmutv.sosalarm.local:8017/new-incoming-call?from='; // will need to fix hard coded url
                var applicationEntryPoint = applicationUrl + callingNumber;
    
                window.open(applicationEntryPoint);
        
                if (popEvent === 'afterNormalAccept') {
            
                    console.log('afterNormalAccept screenpop');
            
                    //this opens an URL in a custom card inside ACE Interact, men det är beroende av inställningar på sidan som inkluderas (X-Frame-Options)
                    // ACE.JSApi.openCustomContent({
                    //     url: 'https://www.sosalarm.se',
                    //     title: 'SOS Alarm',
                    //     customCardId: 'web1'
                    // });

                    
                }
                
                //agent can manually trigger events
                else if (popMsg.popEvent == 'manual') {
                    console.log('manual screenpop');
                }
            }
        }
    }); 
  })();