import { StyleSheet, Text, View } from 'react-native';
import WorkerForm from './app/workForm';


const App = () => {
  return (
    
    <div className="app-container" style={inStyle}>
      <h1>Worker Information</h1>
      <WorkerForm />
    </div>
  );
};
const inStyle ={
  display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    paddingLeft : '50vh'
}
export default App;

