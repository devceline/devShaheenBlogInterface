import React, {useState} from "react";
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

    const router = useRouter();


    const loadBlogs = (pageNumber: number) => {

        const tag = router.query.tag? router.query.tag[0] : null;

        BlogsClient.getBlogs(pageNumber, tag ,(blogs) => {
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

    return (
        <>
            <Head>
                <title>Dev Shaheen's Blog </title>
                <script src="https://kit.fontawesome.com/5b1b66895a.js" crossOrigin="anonymous"></script>
            </Head>
            <Container className="p-0 w-100 mw-100">
                <Row className="mx-0">
                    <Col>
                        <Container>
                            <Header />

                            <Row>
                                <Container>
                                    <InfiniteScroll
                                        hasMore={moreExists}
                                        pageStart={0}
                                        loadMore={loadBlogs}
                                        loader={loadingSpinner}>
                                        {blogsJsx}
                                    </InfiniteScroll>
                                </Container>
                            </Row>
                        </Container>
                    </Col>
                    {/* <Sidebar /> */}
                </Row>
            </Container>
        </>
    );
}

export default Home;
