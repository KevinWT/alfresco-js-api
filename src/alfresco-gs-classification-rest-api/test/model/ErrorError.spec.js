

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AlfrescoGovernanceServicesSecurityControls);
  }
}(this, function(expect, AlfrescoGovernanceServicesSecurityControls) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AlfrescoGovernanceServicesSecurityControls.ErrorError();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ErrorError', function() {
    it('should create an instance of ErrorError', function() {
      // uncomment below and update the code to test ErrorError
      //var instane = new AlfrescoGovernanceServicesSecurityControls.ErrorError();
      //expect(instance).to.be.a(AlfrescoGovernanceServicesSecurityControls.ErrorError);
    });

    it('should have the property errorKey (base name: "errorKey")', function() {
      // uncomment below and update the code to test the property errorKey
      //var instane = new AlfrescoGovernanceServicesSecurityControls.ErrorError();
      //expect(instance).to.be();
    });

    it('should have the property statusCode (base name: "statusCode")', function() {
      // uncomment below and update the code to test the property statusCode
      //var instane = new AlfrescoGovernanceServicesSecurityControls.ErrorError();
      //expect(instance).to.be();
    });

    it('should have the property briefSummary (base name: "briefSummary")', function() {
      // uncomment below and update the code to test the property briefSummary
      //var instane = new AlfrescoGovernanceServicesSecurityControls.ErrorError();
      //expect(instance).to.be();
    });

    it('should have the property stackTrace (base name: "stackTrace")', function() {
      // uncomment below and update the code to test the property stackTrace
      //var instane = new AlfrescoGovernanceServicesSecurityControls.ErrorError();
      //expect(instance).to.be();
    });

    it('should have the property descriptionURL (base name: "descriptionURL")', function() {
      // uncomment below and update the code to test the property descriptionURL
      //var instane = new AlfrescoGovernanceServicesSecurityControls.ErrorError();
      //expect(instance).to.be();
    });

  });

}));
