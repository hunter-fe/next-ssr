import { GetServerSideProps } from 'next';
import {AdminPortal, useAuth, withSSRSession} from '@frontegg/nextjs';
import styles from '../styles/Home.module.css'

const Home = ({}) => {
  const {user} = useAuth();

  const showPortal = () => {
    AdminPortal.show()
  }

  return (
    <div className={styles.container}>
      <div>
        <img src={user?.profilePictureUrl} alt={user?.name}/>
      </div>
      <div>
        <span>Logged in as: {user?.name}</span>
      </div>
      <div>
        <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
        <button onClick={() => showPortal()}>Settings</button>
      </div>
      <div>
        <button onClick={() => window.location.href = '/account/logout'}>Click me to logout</button>
      </div>
    </div>
  )
}

// import { GetServerSideProps } from 'next';
// import { withSSRSession } from '@frontegg/nextjs';

// export default function MyPage({ products }) {
//   return (
//     <div>
//       <h1>My Page</h1>
//       {products}
//     </div>
//   );
// }

export const getServerSideProps = withSSRSession(
  async (context, session) => {

    return { props: {  } };
  }
);

export default Home