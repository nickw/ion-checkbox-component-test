Template.ionCheckbox.helpers({
  name: function () {
    return this.name;
  },

  id: function () {
    return this.name;
  },

  value: function () {
    return this.model.get();
  },

  checked: function () {
    return this.model.get();
  },

  disabled: function () {
    if (this.disabled) {
      return 'disabled';
    }
  }
});

Template.ionCheckbox.events({
  'change': function (event, template) {
    var checked = $(event.target).is(':checked');
    template.data.model.set(checked);
    $(template.firstNode).trigger('change.ion-checkbox');
  }
});
