import { RouterProvider } from "react-router-dom"
import { MainRoute } from "./router/MainRoute"
import { Provider } from "react-redux"
import { store } from "./global/store"
import { ReactQueryDevtools  } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

const client = new QueryClient()
const persistor = persistStore(store)

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={client}>
      <RouterProvider router={MainRoute}/>
      <ReactQueryDevtools />
      </QueryClientProvider>
      </PersistGate>
      </Provider>
    </div>
  )
}

export default App