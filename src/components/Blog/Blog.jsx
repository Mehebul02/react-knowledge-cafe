import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleToBookMark}) => {
    const {title,cover,author_img,reading_time,author,posted_date,hashtags}=blog;
    return (
        <div className='mt-10'>
            <img src={cover} alt="" />
            
           <div className='flex justify-between mt-10'>
           <div className='flex gap-5'>
                <img  src={author_img} alt="" className='w-14'/>
                <div >
                    <h3>{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-md font-semibold'>{reading_time}Min Read</span>
                    <button onClick={()=>handleToBookMark(blog)} className='ml-4 text-2xl text-blue-800'> <FaBookmark></FaBookmark></button>
                </div>
            
           </div>
           <div>
           <h1 className='text-4xl'>Title:{title}</h1>
           {
            hashtags.map((hashtags,idx) => <span key={idx}>#{hashtags}</span>)
           }
           </div>

        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleToBookMark:PropTypes.func


}
export default Blog;