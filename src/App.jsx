import './css/App.css'
import DetailsProd from './DetailsProd';
import List from './List'

function App() {
  const {pathname} = window.location;
  console.log('pathname', pathname)
  let Component;
  if (pathname === '/products/1') {
    Component = DetailsProd;
  } else {
    Component = List;
  }
  return (
    
      <Component />
    
  )
}

export default App
