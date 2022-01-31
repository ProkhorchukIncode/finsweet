import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../Container"
import BlogCard from "../BlogCard"
import NoBlogs from "../NoBlogs";

import InfiniteScroll from 'react-infinite-scroll-component';
import styled from "styled-components";

import { fetchBlogs } from "../../Redux/blogs/blogsReducer";

import './OurBlog.scss'

const Title = styled.h2`
    margin-top: ${props => props.titleCenter ? '50px' : '0'};
    margin-bottom: 64px;
    text-align: center;
    @media(min-width: 1400px) {
        text-align: ${props => props.titleCenter ? 'center' : 'start'};
    }
`

const OurBlog = ({scroll=false, numberBlogs=3, titleCenter=false}) => {
    const [pageBlogs, setPageBlogs] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const dispatch = useDispatch()
    const blogsList = useSelector((state) => state.blogs.entities)
    
    const fetchMoreData = () => {
        if(blogsList.length >= 50){
            setHasMore(false)
            return
        }
        const newObj={
            pageBlogs,
            numberBlogs
        }
        dispatch(fetchBlogs(newObj))
        setPageBlogs(pageBlogs+1)
    }
    
    useEffect(()=>{
        fetchMoreData()
    },[dispatch])

    return (
        <section className="ourBlog-section">
            <Container>
                <Title className="ourBlog-title" titleCenter={titleCenter}>Our blog</Title>
                <ul className="ourBlog-flex">
                    {scroll ? 
                    <>
                        <InfiniteScroll 
                        className='ourBlog-flex'
                            dataLength={blogsList.length} //This is important field to render the next data
                            next={fetchMoreData}
                            hasMore={hasMore}
                            loader={<h4>Loading...</h4>}
                            endMessage={<NoBlogs/>}
                        >
                            {blogsList?.map(({url, title, id})=> {
                            return(
                                <BlogCard 
                                    image={url} 
                                    title={title} 
                                    key={id}
                                />
                                )
                            })}
                        </InfiniteScroll>
                    </>
                    :
                    <>
                        {blogsList?.map(({url, title, id})=> {
                            return(
                                <BlogCard 
                                    image={url} 
                                    title={title} 
                                    key={id}
                                />
                            )
                        })}
                    </>}
                </ul>
            </Container>
        </section>
    )
}

export default OurBlog