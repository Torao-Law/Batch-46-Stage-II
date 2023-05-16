import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function UserDetail() {
    const [data, setData] = useState(null)
    const { id } = useParams()
    // console.log(params)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // https://jsonplaceholder.typicode.com/users/123
          .then((response) => response.json())
          .then((json) => setData(json));
        return () => {
          setData(null);
        };
    }, [])

    return (
        <Container className="text-center">
            <h1>Data user with parameter {id} is</h1>
            <br />
            <p className="h2">{data?.name}</p>
            <p>{data?.username}</p>
            <p>{data?.email}</p>
            <p>{data?.phone}</p>
            <p>{data?.website}</p>
        </Container>
    )
}