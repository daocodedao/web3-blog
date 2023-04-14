import { useState, useEffect } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

// https://api.thegraph.com/subgraphs/name/daocodedao/blogcms
const APIURL = 'https://api.thegraph.com/subgraphs/name/daocodedao/blogcms'

const blogQuery = `
{
    postSearch(
      text: "111"
    ) {
      id
      title
      contentHash
      published
      postContent
    }
}
`

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})

export default function Search() {
    const [searchCount, setSearchCount] = useState(0)
    client.query({
        query: gql(blogQuery),
    })
    .then((data) => {
        console.log('Subgraph data: ', data)
        setSearchCount(data?.data?.postSearch?.length)
    })
    .catch((err) => {
        console.log('Error fetching data: ', err)
    })
    return (
        <div>搜索条件是：111， 共有
        {
            searchCount
        }
        条数据
        </div>
    )
}