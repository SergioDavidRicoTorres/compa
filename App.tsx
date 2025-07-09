import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./src/contexts/AuthContext";
import ExplorationScreen from "./src/screens/Exploration/ExplorationScreen";
import ExpressionScreen from "./src/screens/Expression/ExpressionScreen";
import ProfileScreen from "./src/screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Exploration" component={ExplorationScreen} />
            <Tab.Screen name="Expression" component={ExpressionScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
