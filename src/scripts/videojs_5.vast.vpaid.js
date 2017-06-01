'use strict';

require('./plugin/components/ads-label_5');
require('./plugin/components/black-poster_5');

// require('../test-mocks/override-xhr-requests');

var videoJsVAST = require('./plugin/videojs.vast.vpaid');

videojs.plugin('vastClient', videoJsVAST);
