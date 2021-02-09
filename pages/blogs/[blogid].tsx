import React, {useEffect, useState} from "react";
import { useRouter, withRouter } from "next/router";
import Head from "next/head";
import Link from "next/link"
import {Blog} from "../../model"
import BlogPost from "../../components/BlogPost";
import BlogsClient from "../../blogApiClient"
import {Container, Row} from "react-bootstrap";
import Header from "../../components/Header";


const BlogPage = ({blog}: {blog: Blog}) => {

    return (
        <>
            <Head>
                <title>{blog.title}</title>
                <script src="https://kit.fontawesome.com/5b1b66895a.js" crossOrigin="anonymous"></script>
                
                your tolerance threshold 
            </Head>
            <Container>
                <Header />
                <Container>
                    <Row>
                        <Link href={`/blogs/${blog._id}`}>
                            {blog && <BlogPost blog={blog} />}
                        </Link>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export async function getServerSideProps({query}){

    const blog = await BlogsClient.getBlogAsync(query.blogid);
    return {
        props: {blog: blog}
    }



}



export default BlogPage;
