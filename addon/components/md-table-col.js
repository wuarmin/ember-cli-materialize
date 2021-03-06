import Ember from 'ember';
import layout from '../templates/components/md-table-col';
import Table from './md-table';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';

const { Component, computed, get, computed: { alias } } = Ember;

export default Component.extend(ChildComponentSupport, {
  _parentComponentTypes: [Table],
  tagName: 'td',
  layout,
  valueBindingPath: null,
  headerComponentName: 'md-default-column-header',
  headerComputed: computed('valueBindingPath', 'header', function() {
    if(this.get('header') || this.get('header.length') === 0) {
      return this.get('header');
    } else {
      return this.get('valueBindingPath');
    }
  }),
  key: alias('valueBindingPath'),
  _value: computed('valueBindingPath', 'row', function() {
    let vbp = this.get('valueBindingPath');
    if (!vbp) {
      return '';
    } else {
      return get(this.get('row'), this.get('valueBindingPath'));
    }
  })
});
