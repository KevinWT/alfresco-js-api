/**
 * Alfresco Content Services REST API
 * **Core API**  Provides access to the core features of Alfresco Content Services.
 *
 * OpenAPI spec version: 1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/PersonBodyCreate', '../model/PersonBodyUpdate', '../model/PersonEntry', '../model/PersonPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/PersonBodyCreate'), require('../model/PersonBodyUpdate'), require('../model/PersonEntry'), require('../model/PersonPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PeopleApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.PersonBodyCreate, root.AlfrescoCoreRestApi.PersonBodyUpdate, root.AlfrescoCoreRestApi.PersonEntry, root.AlfrescoCoreRestApi.PersonPaging);
  }
}(this, function(ApiClient, Error, PersonBodyCreate, PersonBodyUpdate, PersonEntry, PersonPaging) {
  'use strict';

  /**
   * People service.
   * @module api/PeopleApi
   * @version 0.1.0
   */

  /**
   * Constructs a new PeopleApi.
   * @alias module:api/PeopleApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create person
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Create a person.  If applicable, the given person&#39;s login access can also be optionally disabled.  You must have admin rights to create a person.  You can set custom properties when you create a person: &#x60;&#x60;&#x60;JSON {   \&quot;id\&quot;: \&quot;abeecher\&quot;,   \&quot;firstName\&quot;: \&quot;Alice\&quot;,   \&quot;lastName\&quot;: \&quot;Beecher\&quot;,   \&quot;email\&quot;: \&quot;abeecher@example.com\&quot;,   \&quot;password\&quot;: \&quot;secret\&quot;,   \&quot;properties\&quot;:   {     \&quot;my:property\&quot;: \&quot;The value\&quot;   } } &#x60;&#x60;&#x60; **Note:** setting properties of type d:content and d:category are not supported.
     * @param {module:model/PersonBodyCreate} personBodyCreate The person details.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PersonEntry}
     */
    this.createPerson = function(personBodyCreate, opts) {
      opts = opts || {};
      var postBody = personBodyCreate;

      // verify the required parameter 'personBodyCreate' is set
      if (personBodyCreate == undefined || personBodyCreate == null) {
        throw new Error("Missing the required parameter 'personBodyCreate' when calling createPerson");
      }


      var pathParams = {
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PersonEntry;

      return this.apiClient.callApi(
        '/people', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a person
     * Gets information for the person **personId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PersonEntry}
     */
    this.getPerson = function(personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw new Error("Missing the required parameter 'personId' when calling getPerson");
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PersonEntry;

      return this.apiClient.callApi(
        '/people/{personId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List people
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  List people.  You can use the **include** parameter to return any additional information.  The default sort order for the returned list is for people to be sorted by ascending id. You can override the default by using the **orderBy** parameter.  You can use any of the following fields to order the results: * id * firstName * lastName
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Number} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally ascending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
     * @param {Array.<String>} opts.include Returns additional information about the person. The following optional fields can be requested: * properties * aspectNames
     * @param {Array.<String>} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PersonPaging}
     */
    this.listPeople = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': this.apiClient.buildCollectionParam(opts['orderBy'], 'csv'),
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PersonPaging;

      return this.apiClient.callApi(
        '/people', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update person
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Update the given person&#39;s details.  If applicable, the given person&#39;s login access can also be optionally disabled or re-enabled.  You must have admin rights to update a person — unless updating your own details.  If you are changing your password, as a non-admin user, then the existing password must also be supplied (using the oldPassword field in addition to the new password value).  Admin users cannot be disabled by setting enabled to false.  Non-admin users may not disable themselves.  You can set custom properties when you update a person: &#x60;&#x60;&#x60;JSON {   \&quot;firstName\&quot;: \&quot;Alice\&quot;,   \&quot;properties\&quot;:   {     \&quot;my:property\&quot;: \&quot;The value\&quot;   } } &#x60;&#x60;&#x60; **Note:** setting properties of type d:content and d:category are not supported.
     * @param {String} personId The identifier of a person.
     * @param {module:model/PersonBodyUpdate} personBodyUpdate The person details.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PersonEntry}
     */
    this.updatePerson = function(personId, personBodyUpdate, opts) {
      opts = opts || {};
      var postBody = personBodyUpdate;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw new Error("Missing the required parameter 'personId' when calling updatePerson");
      }

      // verify the required parameter 'personBodyUpdate' is set
      if (personBodyUpdate == undefined || personBodyUpdate == null) {
        throw new Error("Missing the required parameter 'personBodyUpdate' when calling updatePerson");
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PersonEntry;

      return this.apiClient.callApi(
        '/people/{personId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
