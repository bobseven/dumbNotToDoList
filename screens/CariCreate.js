import React, {Component} from 'react';
import {Container, Content,  Form, Item, Label, Input, Button} from 'native-base';
import {Text} from 'react-native'
export default class CariCreate  extends Component{

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
<Label>Pencarian</Label>
<input  onChangeText={(text) => this.setState({text})}/>



</Item>
<Button full primary onPress={()=> this.handleSubmit()}>
<Text>Cari</Text>
</Button>

</Form>
</Content>
</Container>

)

  }
}
