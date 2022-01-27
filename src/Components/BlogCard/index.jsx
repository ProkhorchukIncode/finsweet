import LinkWithArrow from '../LinkWithArrow'

import './BlogCard.css'

const BlogCard = ({image, date, title, text, path}) => {
    return (<li>
        <div className='blogCard-box'>
            <img src={image} alt={title} className='blogCard-image'/>
            <p className='blogCard-date'>{date}</p>
            <h6 className='blogCard-title'>{title}</h6>
            <p className='blogCard-text'>{text}</p>
            <LinkWithArrow path={path} >
            Read More
            </LinkWithArrow>
        </div>
    </li>
    )
}
export default BlogCard