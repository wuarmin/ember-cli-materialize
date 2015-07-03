import Ember from 'ember';
import MaterializeButton from './md-btn';

export default MaterializeButton.extend({
  tagName: 'a',
  classNames: ['dropdown-button'],
  icon: "mdi-navigation-expand-more",
  iconPosition: 'right',
  attributeBindings: [
    'activates:data-activates', 'inDuration', 'outDuration', 'constrainWidth', 'hover', 'gutter', 'belowOrigin'
  ],
  didInsertElement() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, this._setupDropdown);
  },
  _setupDropdown() {
    Ember.assert("Required attribute 'activates' not specified on 'materialize/dropdown-button' component", !Ember.isNone(this.get('activates')));

    this.$().dropdown({
      hover: this.getWithDefault('hover', false),
      constrainWidth: this.getWithDefault('constrainWidth', true),
      inDuration: this.getWithDefault('inDuration', 300),
      outDuration: this.getWithDefault('outDuration', 300),
      gutter: this.getWithDefault('gutter', 0),
      belowOrigin: this.getWithDefault('belowOrigin', false)
    });
  }
});
