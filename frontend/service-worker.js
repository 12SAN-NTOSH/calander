self.__WB_DISABLE_DEV_LOGS=!0,[],self.addEventListener("message",(function(){})),self.addEventListener("install",(function(){self.skipWaiting()})),self.addEventListener("activate",(function(){self.clients.matchAll({type:"window"}).then((function(e){e.forEach((function(e){e.navigate(e.url)}))}))}));