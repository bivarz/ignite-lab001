import { gql, useQuery } from '@apollo/client'


const GET_LESSONS_QUERY = gql`
query{
  lessons{
    id
    title
  }
}
`

  
  


function App() { 
  return (
    <div className="App">
     <h1>hi</h1>
    </div>
  )
}

export default App
