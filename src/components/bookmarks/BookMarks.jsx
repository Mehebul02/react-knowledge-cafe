
import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';
const BookMarks = ({bookmarks}) => {
    return (
        
             <div className='md:w-1/3 text-2xl text-center bg-slate-200 mt-10 font-bold p-4 rounded-lg border-b-2 '>
            <h1 className='border-b-2 border-blue-800'>Bookmarked Blogs :{bookmarks.length}</h1>
            
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }

        </div>
        
    );
};

BookMarks.propTypes = {
    bookmarks:PropTypes.array,
};

export default BookMarks;