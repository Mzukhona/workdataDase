import { StyleSheet, Text, View } from 'react-native';
import WorkerForm from './app/workForm';
import styles from './app/style';


const App = () => {
  return (
    <div className="app-container">
      <h1>Worker Information</h1>
      <WorkerForm />
    </div>
  );
};

export default App;

