'use client'
import { useParams } from "next/navigation"

export default function PostDetail() {
    const params = useParams();
    const id = params.id;
    return (<div>{`This page id is ${id}`}</div>)
}