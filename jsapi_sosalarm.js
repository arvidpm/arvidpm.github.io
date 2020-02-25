(() => {
  //code added here runs when agent logs in
  
  ACE.JSApi.onScreenPop((popMsg) => { 
    console.log('Screen pop event', popMsg);
	
    if(popMsg.popEvent == 'afterNormalAccept') {
	  console.log('afterNormalAccept screenpop');
      //this opens an URL in a custom card inside ACE Interact, men det är beroende av inställningar på sidan som inkluderas (X-Frame-Options)
      ACE.JSApi.openCustomContent({
        url: 'https://www.sosalarm.se',
        title: 'SOS Alarm',
        customCardId: 'web1'
      });	
      //this opens an URL in a new browser window, usually in a new tab but it depends on browser settings
      window.open('https://www.sosalarm.se');
	}
	//agent can manually trigger events
	else if(popMsg.popEvent == 'manual'){
      console.log('manual screenpop');
	}
  }); 
})();