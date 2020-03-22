public with sharing class CustomObjectSearchLtngCtrl {
    @AuraEnabled public static List<SObject> getSearchList(String searchKeyWord, 
        String objectApiName, String fields) {

        String searchQuery = 'FIND \'' + searchKeyWord + ' IN ALL FIELDS ' +
                             'RETURNING ' + objectApiName + '(' + fields + ')';
        List<List<SObject>> results = Search.find(searchQuery);
        return results[0];
     }
}
