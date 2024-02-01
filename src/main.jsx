import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import './index.css'
import { HeaderAPiSlice } from './pages/Header/HeaderSlice.js'
import { CollectionApiSlice } from './pages/Collection/CollectionSlice.js'
import { NavbarApiSlice } from './pages/navbar/NavbarApiSlice.js'
import { CreatorsApiSlice } from './pages/Creators/CreatorsSlice.js'
import { CategoriesApiSlice } from './pages/Categories/CategoriesSlice.js'
import { discoverApiSlice } from './pages/Discover/DiscoverSlice.js'
import { MushroomApiSlice } from './pages/Mushroom/MushroomSlice.js'
import { WorksApiSlice } from './pages/Works/WorksSlice.js'
import { DigestApiSlice } from './pages/Digest/DigestSlice.js'
import { FooterApiSlice } from './pages/Footer/FooterSlice.js'
import { SubscribersApiSlice } from './components/SubscribersApiSlice.js'
store.dispatch(NavbarApiSlice.endpoints.getNavbar.initiate)
store.dispatch(HeaderAPiSlice.endpoints.getHeader.initiate)
store.dispatch(CollectionApiSlice.endpoints.getCollection.initiate)
store.dispatch(CreatorsApiSlice.endpoints.getCreators.initiate)
store.dispatch(CategoriesApiSlice.endpoints.getCategories.initiate)
store.dispatch(discoverApiSlice.endpoints.getDiscover.initiate)
store.dispatch(MushroomApiSlice.endpoints.getMushrooms.initiate)
store.dispatch(WorksApiSlice.endpoints.getWorks.initiate)
store.dispatch(DigestApiSlice.endpoints.getDigest.initiate)
store.dispatch(FooterApiSlice.endpoints.getFooter.initiate)
// store.dispatch(SubscribersApiSlice.endpoints.get.initiate)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
      
  </React.StrictMode>,
)
