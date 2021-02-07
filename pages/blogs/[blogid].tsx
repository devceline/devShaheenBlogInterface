import React, {useEffect, useState} from "react";
import { useRouter, withRouter } from "next/router";
import Head from "next/head";
import {Blog} from "../../model"
import BlogPost from "../../components/BlogPost";
import BlogsClient from "../../blogApiClient"
import {Container, Row} from "react-bootstrap";
import Header from "../../components/Header";


const BlogPage = ({blog}: {blog: Blog}) => {

    let {query: {blogid}}= useRouter() as any;

    return (
        <>
            <Head>
                <title>{blog.title}</title>
            </Head>
            <Container>
                <Header />
                <Container>
                    <Row>
                        {blog && <BlogPost blog={blog} />}
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
