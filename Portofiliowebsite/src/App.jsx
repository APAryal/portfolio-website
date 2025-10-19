import React from 'react'
import StackNavigator from './navigation/StackNavigator.jsx'
import BlurBlob from './BlurBlob.jsx'
import './App.css'

function App() {
  return (
   <>
   <BlurBlob position={{top: '50%', left: '50%'}} size={{width: '200px', height: '200px'}} />
   <div className='bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 min-h-screen text-white'>
    <StackNavigator />
   </div>
   </>

  )
}

export default App
