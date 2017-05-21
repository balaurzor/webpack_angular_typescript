'use strict';

export class HomepageCommonController {
    public name: string;
    public static $inject: string[] = [];

    constructor() {}

    $onInit() {
        console.log('hey');
        this.name = 'user';
    }
};
