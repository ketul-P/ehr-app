export default function LoginPage() {
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.title}>Sign In</h2>

        <label htmlFor="username" style={styles.label}>Username</label>
        <input
          id="username"
          name="username"
          type="text"
          style={styles.input}
          required
        />

        <label htmlFor="password" style={styles.label}>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>Sign In</button>

        <p style={styles.signUpText}>
          New user?{' '}
          <span style={styles.signUpLink}>Sign Up</span>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '2rem 3rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(152, 62, 62, 0.5)',
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    marginBottom: '1.5rem',
    color: '#0d47a1',
    textAlign: 'center',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#333333',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #cccccc',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#1976d2',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  signUpText: {
    marginTop: '1rem',
    textAlign: 'center',
    color: '#555555',
  },
  signUpLink: {
    color: '#1976d2',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};
