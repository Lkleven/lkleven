import React from 'react'
// import firebase from 'firebase'
import Squares from './Squares/Squares'
import Lines from './Lines/Lines'
import './Loaders.scss'

// How to firebase::
// var config = {
//   apiKey: 'AIzaSyAkjGhwqYU7BxGDDENB-PEZV1uocWsabzI',
//   authDomain: 'tutorial-57f7e.firebaseapp.com',
//   databaseURL: 'https://tutorial-57f7e.firebaseio.com',
//   projectId: 'tutorial-57f7e',
//   storageBucket: 'tutorial-57f7e.appspot.com',
//   messagingSenderId: '73825371074'
// }

// firebase.initializeApp(config)

// var dbRef = firebase.database().ref()
// var dataObj = []

// dbRef.on('value', function(snapshot) {
//   snapshot.forEach(function(child) {
//     console.log(child.val())
//     dataObj.push(child.val())
//   })
// })

// console.log(dataObj)

const Loaders = () => {
  return (
    <div className="loaders">
      <Squares color={'#333'} size={'80px'} />
      <Squares color={'#555'} rotation={45} alternating size={'30px'} />
      <Squares color={'#31a502'} rotation={20} borderRadius={'15px'} duration={'2000ms'} size={'80px'} />
      <Squares color={'#abd'} alternating duration={'1500ms'} rotation={45} />
      <Squares color={'#abdabd'} />
      <Squares color={'#8c15e4'} borderRadius={'40px'} duration={'1500ms'} />
      <Lines />
    </div>
  )
}

export default Loaders
