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
}

const BlogPost = (props: Props) => {

    const contentRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (contentRef.current != null) {
            render(
                <ReactMarkdown children={props.blog.contents} />,
                    contentRef.current, () => {
                    if(props.shortened && contentRef.current && contentRef.current.innerHTML.length > 500){
                        contentRef.current!.innerHTML = 
                            contentRef.current.innerHTML.substring(0, 500) + 
                            `...<a href="/blogs/${props.blog._id}"> Read More </a>`
                    }
                }
            );

        }
    }, [contentRef,props.blog._id])


    return (
        <Container className="shadow-lg my-3 p-3 px-2 rounded border bg-dracforeground">
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


