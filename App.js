import { StackNavigator } from 'react-navigation';

import Todos from './screens/Todos';
import TodosCreate from './screens/TodosCreate';


const App = StackNavigator({
  Todos: {
      screen: Todos,
      navigationOptions: {
        headerTitle: 'Pencarian',
      },
    },
    TodosCreate: {
        screen: TodosCreate,
        navigationOptions: {
          headerTitle: 'Cari',
        },
      }

});

export default App;
