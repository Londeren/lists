import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import TemplateList from '../components/templates/TemplateList';
import AddListLink from '../components/lists/AddListLink';
import {addList} from '../actions/Lists';
import isEmpty from 'lodash/isEmpty';
import {Templates} from '../services/templates';

class ListsIndex extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);

    this.templates = this.props.templates.map(tpl => {
      return {
        id: tpl.id,
        name: tpl.name
      };
    });
  }

  addItem(templateId) {
    const tpl = Templates(this.props.templates).getById(templateId);

    if (!isEmpty(tpl)) {
      this.props.dispatch(routeActions.push(`/lists/create/${templateId}`));
      this.props.dispatch(addList(tpl));
    }
  }

  render() {
    return (
      <AddListLink onAdd={this.addItem} templateList={this.templates} />
    );
  }
}


export default connect((state) => {
  return {...state};
})(ListsIndex);