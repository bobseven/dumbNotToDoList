import { StackNavigator } from 'react-navigation';

import Todos from './screens/Todos';
import TodosCreate from './screens/TodosCreate';
import CariCreate from './screens/CariCreate';

const App = StackNavigator({
  Todos: {
      screen: Todos,
      navigationOptions: {
        headerTitle: 'Not To Do List',
      },
    },
    TodosCreate: {
        screen: TodosCreate,
        navigationOptions: {
          headerTitle: 'Create Todos',
        },
      },
      CariCreate: {
          screen: CariCreate,
          navigationOptions: {
            headerTitle: 'Create Cari',
          },
        }

});

export default App;
