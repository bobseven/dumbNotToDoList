import React, {Component} from 'react';
import {Container, Content,  Form, Item, Label, Input, Button} from 'native-base';
import {Text} from 'react-native'
export default class TodosCreate  extends Component{

constructor(){
  super();
  this.state = {
    text: ""
  }
}

handleSubmit(){
  alert(this.state.text)
}

  render() {

    return(
<Container>
<Content>
<Form>
<Item floatingLabel>
<Label>Not To Do</Label>
<input  onChangeText={(text) => this.setState({text})}/>



</Item>
<Button full primary onPress={()=> this.handleSubmit()}>
<Text>Submit</Text>
</Button>

</Form>
</Content>
</Container>

)

  }
}
