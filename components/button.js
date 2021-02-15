import styles from './button.module.scss';
import { useRouter } from 'next/router';

export default function Button({ route, children }) {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  }

  return (
    <button 
      className={styles.button} 
      onClick={handleClick}
    >
      {children}
    </button>
  ) 
}