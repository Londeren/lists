import React, { Component, PropTypes } from 'react';
import ListItem from './ListItem';

export default class ListList extends Component {

  render() {
    const {items} = this.props;

    return (
      <div className="list-group">
        {items.map(function(item) {
          return (
            <ListItem key={item.id} id={item.id} name={item.name} itemsCount={item.items.length} />
          );
        })}
      </div>
    );
  }
}

ListList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    }).isRequired).isRequired
  }).isRequired).isRequired
};