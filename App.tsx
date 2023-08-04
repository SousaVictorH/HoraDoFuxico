import { SafeAreaProvider } from 'react-native-safe-area-context'

import App from './src'

export default () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
)
