import React, {useEffect, useState} from "react";
import BlogPost from "../components/BlogPost"
import BlogsClient from "../blogApiClient";
import {
    Container,
    Row,
    Col,
    Spinner
} from "react-bootstrap"
import { useRouter, withRouter } from "next/router";
import Head from "next/head";
import InfiniteScroll from 'react-infinite-scroller';
import Header from "../components/Header"



const loadingSpinner = (
    <Col>
        <Row>
            <Spinner className="mx-auto mh-100 text-dracforeground p-5 m-5" animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </Row>
    </Col>
);

const Home = () => {
    const [blogsJsx, setBlogsJsx] = useState<JSX.Element[]>([]);
    const [moreExists, setMoreExists] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);

    const router = useRouter();

    const [tag, setTag] = useState<string | null>(router.query.tag as string);

    useEffect(() => {
        setTag(router.query.tag as string);
        setPageNumber(0);
    }, [router.query.tag])

    useEffect(() => {
        loadBlogs(pageNumber, tag);
    }, [pageNumber, tag])




    const loadBlogs = (pageNumber: number, tag: string) => {

        BlogsClient.getBlogs(pageNumber, tag ,(blogs) => {
            console.log(blogs)
            if (blogs.length < 1) {
                setMoreExists(false);
                return;
            }

            const newBlogsJsx = blogsJsx.concat(blogs.map(b =>
                <BlogPost shortened={true} key={b._id}
                    maxContentLength={400}
                    blog={{
                        _id: b._id,
                        title: b.title,
                        contents: b.contents,
                        createdOn: b.createdOn,
                        modifiedOn: b.modifiedOn,
                        tags: b.tags
                    }} />))


            setBlogsJsx(newBlogsJsx);

        })


    }

    const handleScroll = (e: React.UIEvent<HTMLDivElement,UIEvent> ) => {
        const target = e.target as HTMLDivElement;
        const isAtEnd = target.scrollHeight - target.scrollTop === target.clientHeight;
        if(isAtEnd) setPageNumber(pageNumber + 1);

    }

    return (
        <>
            <Head>
                <title>Dev Shaheen's Blog </title>
            </Head>
            <Container className="p-0 w-100 mw-100">
                <Row className="mx-0">
                    <Col>
                        <Container>
                            <Header />

                            <Row>
                                <Container onScroll={handleScroll}>
                                    {blogsJsx}
                                </Container>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
