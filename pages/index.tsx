import React, { UIEvent, useEffect, useState } from "react";
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
import Header from "../components/Header"
import { Blog } from "../model";
import Link from "next/link"



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
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [moreExists, setMoreExists] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);

    const router = useRouter();

    const [tag, setTag] = useState<string | null>(router.query.tag as string);

    useEffect(() => {
        setTag(router.query.tag as string);
        setPageNumber(1);
    }, [router.query.tag])

    useEffect(() => {
        loadBlogs(pageNumber, tag);
    }, [pageNumber, tag])


    const loadBlogs = (pageNumber: number, tag: string) => {
        setIsLoading(true);

        BlogsClient.getBlogs(pageNumber, tag, (blogsRs) => {
            setIsLoading(false);
            if (blogsRs.length < 1) {
                setMoreExists(false);
                return;
            }

            setBlogs(blogs.concat(blogsRs));
        })
    }

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (!moreExists) return;
        const target = e.target as HTMLDivElement;
        const isAtEnd = target.scrollHeight - target.scrollTop === target.clientHeight;
        if (isAtEnd) setPageNumber(pageNumber + 1);

    }

    return (
        <>
            <Head>
                <title>Dev Shaheen's Blog </title>
                <script src="https://kit.fontawesome.com/5b1b66895a.js" crossOrigin="anonymous"></script>
            </Head>
            <Container className="p-0 w-100 mw-100 noscroll" >
                <Row className="mx-0">
                    <Col>
                        <Container>
                            <Header />

                            <Row>
                                <Container>
                                    <div className="noscroll" onScroll={handleScroll} style={{ overflow: "scroll", height: "50em" }}>
                                        {blogs.map(b =>
                                            <Link href={`/blogs/${b._id}`} passHref>
                                                <a style={{textDecoration: "none"}}>
                                                <BlogPost shortened={true} key={b._id}
                                                    className="blog-post"
                                                    maxContentLength={400}
                                                    blog={{
                                                        _id: b._id,
                                                        title: b.title,
                                                        contents: b.contents,
                                                        createdOn: b.createdOn,
                                                        modifiedOn: b.modifiedOn,
                                                        tags: b.tags
                                                    }} />
                                                </a>

                                            </Link>
                                        )}
                                        {isLoading ? loadingSpinner : null}
                                    </div>
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
