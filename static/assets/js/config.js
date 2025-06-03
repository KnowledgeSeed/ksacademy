let app = {};
app = {id: 0, isMobile: null, isTouched: false, url: {}};
app.assetsUrl = '/analogic4/static/assets';
app.applicationAssetsUrl = '/analogic4/apps/ksacademy/static/assets';
app.tm1CellsetId = (cellsetId) => `Cellsets('${cellsetId}')?`;
app.handled401 = false;
app.pingTime = new Date().getTime();

    
        app['projectName'] = 'KS Academy';
    

    

    

    
        app['projectId'] = 'ksacademy';
    

    

    

    
        app['authenticationMode'] = 'LoginBasic';
    

    

    

    
        app['camNamespace'] = 'knowledgeseed';
    

    

    

    

    

    

    
        app['mainPage'] = 'KsAcademyMainPage';
    

    

    

    
        app['analogicApiAuthenticationMode'] = 'unsecured';
    

    

    

    
        app['connectedSeederUrl'] = 'https://dev.knowledgeseed.ch:9610/seeder';
    

    

    

    
        app['connectedSeederApplicationVersion'] = 'ksacademy_4.0';
    

    

    

    
        app['instance'] = 'ksacademy';
    

    

    

    
        app['blueprint_static'] = 'ksacademy.static';
    

    

    

    

    

    

    

    

    

    
        app['version'] = 'EC986B';
    

    

    

    
        app['apiSubPath'] = '/api/v1/';
    

    

    

    
        app['authenticationBridge'] = '';
    

    

    

    

    
        app['sessionExpiresInMinutes'] = 20;
    

    

    

    

    
        app['useMinifiedAssets'] = false;
    

    

    

    
        app['ssl_verify'] = true;
    
