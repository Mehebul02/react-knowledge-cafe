
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMarks from './components/bookmarks/BookMarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks,setBookmark]=useState([]);
  const handleToBookMark =blog=>{
    console.log('Adding to book mark')
    const newBookmark =[...bookmarks,blog];
    setBookmark(newBookmark)
  }
  
  return (
    <>
    <Header></Header>
   <div className='md:flex justify-between  max-w-7xl mx-auto'>
   <Blogs handleToBookMark={handleToBookMark}></Blogs>
  <BookMarks bookmarks={bookmarks}></BookMarks>
   </div>
      
    </>
  )
}

export default App
