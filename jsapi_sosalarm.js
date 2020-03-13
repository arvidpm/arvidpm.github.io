(() => {

    // Code added here runs when agent logs in
    ACE.JSApi.onScreenPop((popMsg) => {

        console.log('Screen pop event', popMsg);

        // Agents can only be placed in one group at a time
        var allowedAgentsUtv = ["tekj", "hkrr"];
        var allowedAgentsTest = [];
        var allowedAgentsProd = [];

        var applicationUrlUtv = 'https://crmutv.sosalarm.local:8017/new-incoming-call?from=';
        var applicationUrlTest = 'https://crmtest.sosalarm.local:8017/new-incoming-call?from=';
        var applicationUrlProd = 'https://crm.sosalarm.local:8017/new-incoming-call?from=';

        var popEvent = popMsg.popEvent;
        var contact = popMsg.contact;

        if (contact != null && contact.contactData != null) {

            var callingNumber = popMsg.contact.contactData.Ani;
            var agentName = popMsg.contact.contactData.agentName;

            if (popEvent === 'beforeNormalAccept') {

                console.log('beforeNormalAccept screenpop');

                if (allowedAgentsUtv.includes(agentName)) {
                    window.open(applicationUrlUtv + callingNumber);
                }
                else if (allowedAgentsTest.includes(agentName)){
                    window.open(applicationUrlTest + callingNumber);
                }
                else if (allowedAgentsProd.includes(agentName)){
                    window.open(applicationUrlProd + callingNumber);
                }
            }

            if (popEvent === 'afterNormalAccept') {
            
                console.log('afterNormalAccept screenpop');
        
                // This opens an URL in a custom card inside ACE Interact, men det är beroende av inställningar på sidan som inkluderas (X-Frame-Options)
                // ACE.JSApi.openCustomContent({
                //     url: 'https://www.sosalarm.se',
                //     title: 'SOS Alarm',
                //     customCardId: 'web1'
                // });
            }
            // Agent can manually trigger events
            else if (popMsg.popEvent == 'manual') {
                console.log('manual screenpop');
            }
        }
    }); 
  })();