import { LightningElement, api, track, wire } from 'lwc';
import getColumnDefinitions from '@salesforce/apex/CustomObjectSearchCmpLtngCtrl.getColumnDefinitions';
import getSearchList from '@salesforce/apex/CustomObjectSearchLtngCtrl.getSearchList';

export default class LwcCustomObjectSearchCmp extends LightningElement {
    @api objectName = 'Account';
    @api fields = 'Name,Phone';

    @track searchKeyword = '';
    @track error = false;   
    @track showSpinner = false;

    constructor() {
        super();
        this.error = this.searchResults !== undefined && this.searchResults.error !== undefined;
    }

    @wire(getColumnDefinitions, {objectApiName: '$objectName', fields: '$fields'})
    columns;

    @wire(getSearchList, {searchKeyWord: '$searchKeyword', objectApiName: '$objectName', fields: '$fields'})
    searchResults;

    search() {
        this.searchKeyword = this.template.querySelector('.searchField').value;    
    }
}