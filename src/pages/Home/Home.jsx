import { Link } from 'react-router-dom'

function Home() {
  return (
    <div >
      <Link to='/admin/login'>Ich bin Admin</Link>
    </div>
  );
}

export default Home;
