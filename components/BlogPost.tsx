import React, {useEffect, useState, useRef} from "react";
import {render} from "react-dom";
import ReactMarkdown from "react-markdown"
import Link from "next/link"
import {
    Container,
    Row,
    Col,
} from "react-bootstrap"

import {Blog} from "../model"

interface Props {
    blog: Blog
    maxContentLength?: number
    shortened?: boolean
    className?: string
}

const BlogPost = (props: Props) => {

    const contentRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (contentRef.current != null) {

            const contents = 
            props.shortened &&  props.blog.contents.length > 300?
            props.blog.contents.substring(0, 300) +  "..." : props.blog.contents;


            render(<>
                <ReactMarkdown className={props.shortened? "text-muted" : ""} children={contents} />
            </>, contentRef.current);

        }
    }, [contentRef,props.blog._id])


    return (
        <Container className={`shadow-lg  my-3 p-3 px-2 rounded bg-dracforeground ${props.className}`}>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <h4><Link href={`/blogs/${props.blog._id}`}>{props.blog.title}</Link></h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div ref={contentRef} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className="text-muted mr-2"> tags: </span>
                            {props.blog.tags && props.blog.tags.map(s => <span key={s} className="text-draccomment p-1 badge bg-draccurrent mr-2"> {s} </span>)}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    )

}

export default BlogPost;


