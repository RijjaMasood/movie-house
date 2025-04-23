import { useRouter } from 'next/router';

export default function GoBackButton() {
  const router = useRouter();

  return (<button
    onClick={() => router.back()}
    style={{
      marginTop: '2rem',
      padding: '0.6rem 1.2rem',
      backgroundColor: '#89008d',
      color: '#fee6ff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'background-color 0.3s ease',
    }}
    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5c0060'}
    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#89008d'}
  >
    <span style={{ transform: 'scale(1.5)' ,display: 'inline-block' }}>🢐</span>
    Go Back
  </button>
  
  );
}
