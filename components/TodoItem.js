import React, {Component} from 'react';
import { Body, ListItem , Left, Right,CheckBox, Content, Text, View } from 'native-base';
import PropTypes from 'prop-types';





export default class TodoItem extends Component {

  render() {
    const {todo : {id, todo}} = this.props
    return(
      <ListItem key={id}>
      <Left>
       <CheckBox checked={true} />
      </Left>
      <Body>
      <Text>{todo}</Text>
      </Body>
      <Right/>
      </ListItem>
    )

  }
}

TodoItem.PropTypes ={
  todo: PropTypes.object.isRequired
}
