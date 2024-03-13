
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-white rounded-2xl p-2 mt-5'>
           
            <h1>{title}</h1>
            
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.array
};

export default Bookmark;