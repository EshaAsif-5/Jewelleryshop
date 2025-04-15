import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <>
      <div style={styles.container}>
        <p style={styles.text}>
          {text1}{' '}
          <span style={styles.highlight}>{text2}</span>
        </p>
        <div style={styles.underline}></div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: 'inline-flex',
    gap: '8px',
    alignItems: 'center',
    marginBottom: '12px',
  },
  text: {
    color: '#6b7280', 
    fontSize: '16px',
  },
  highlight: {
    color: '#374151', 
    fontWeight: '500',
  },
  underline: {
    width: '48px',
    height: '2px',
    backgroundColor: '#374151',
  },
};

export default Title;
