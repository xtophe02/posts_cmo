import React from 'react'

const auth = () => {
  console.log('AUTH')
  return (
    <div>
      <h1>Auth</h1>
    </div>
  )
}

auth.getInitialProps = async cenas => {
  // const res = await axios.get(
  //   `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  // );
  // const { data } = res;
  // return { ...query, comments: data };
  console.log(cenas);
};

export default auth
