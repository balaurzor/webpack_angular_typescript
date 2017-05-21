'use strict';

import { HomepageCommonComponent } from './homepage/homepage.common.component';
import { HomepageCommonController } from './homepage/homepage.common.controller';

export default angular
    .module('app.common', [])

.component('homepage', HomepageCommonComponent)
.controller('HomepageCommonController', HomepageCommonController)
