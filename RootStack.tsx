import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CurrentProposalScreen from './screens/CurrentProposals';

const RootStack = createStackNavigator();

export default function MainRootStack() {
  return (
    <RootStack.Navigator>
       {/* <RootStack.Screen name='Welcome' component={Welcome} /> */}
      {/* <RootStack.Screen name='Login' component={Login} /> */}
      {/* <RootStack.Screen name='Register' component={Register} /> */}
      {/* <RootStack.Screen name='Dashboard' component={Dashboard} /> */}
      {/* <RootStack.Screen name='News' component={News} />  */}
      {/* <RootStack.Screen name='Contacts' component={Contacts} /> */}
      {/* <RootStack.Screen name='ReportProblem' component={ReportProblem} /> */}
      {/* <RootStack.Screen name='ProposeSolution' component={ProposeSolution} /> */}
      <RootStack.Screen name='CurrentProposals' component={CurrentProposalScreen} />
      {/* <RootStack.Screen name='Favourites' component={Favourites} /> */}
      {/* <RootStack.Screen name='Projects' component={Projects} />  */}
    </RootStack.Navigator>
  );
}