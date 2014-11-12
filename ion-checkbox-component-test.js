if (Meteor.isClient) {
  Template.app.created = function () {
    this.receivePushNotifications = new ReactiveVar();
    this.receivePushNotifications.set(true);

    this.disableCheckbox = new ReactiveVar();
    this.disableCheckbox.set(false);

    this.numberOfClicks = new ReactiveVar();
    this.numberOfClicks.set(0);
  },

  Template.app.helpers({
    checkboxModel: function () {
      var template = Template.instance();
      return template.receivePushNotifications;
    },

    checkboxDisabled: function () {
      var template = Template.instance();
      return template.disableCheckbox.get();
    },

    receivePushNotifications: function () {
      var template = Template.instance();
      return template.receivePushNotifications.get();
    },

    status: function () {
      var template = Template.instance();
      if (template.receivePushNotifications.get()) {
        return 'ON';
      } else {
        return 'OFF';
      }
    },

    verb: function () {
      var template = Template.instance();
      if (template.disableCheckbox.get()) {
        return 'Enable';
      } else {
        return 'Disable';
      }
    },

    numClicks: function () {
      var template = Template.instance();
      return template.numberOfClicks.get();
    }
  });

  Template.app.events({
    'click button': function (event, template) {
      template.disableCheckbox.set(!template.disableCheckbox.get());
    },

    'change.ion-checkbox': function (event, template) {
      // TODO: Why is this picking up all `change` events?
      if (event.namespace === 'ion-checkbox') {
        template.numberOfClicks.set(template.numberOfClicks.get() + 1);
      }
    }
  });
}
