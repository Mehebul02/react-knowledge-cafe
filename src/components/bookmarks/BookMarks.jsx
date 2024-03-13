
import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';
const BookMarks = ({bookmarks,readTime}) => {
    return (    
          
                 <div className='md:w-1/3 text-2xl text-center bg-slate-200 mt-10 font-bold p-4 rounded-lg border-b-2 '>
              
             <div> 
                <h1 className='text-2xl text-blue-800'>Spent time on read  : {readTime}</h1>
             <h1 className='border-b-2 border-blue-800'>Bookmarked Blogs :{bookmarks.length}</h1>
             </div>
              
              {
                  bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
              }
  
         
             
              </div>
                    
                
           
        
    );
};

BookMarks.propTypes = {
    bookmarks:PropTypes.array,
    readTime:PropTypes.number
};

export default BookMarks;