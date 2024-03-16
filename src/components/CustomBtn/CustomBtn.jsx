function CustomBtn({ onClick, children }) {
  const handleClick = () => {
    alert(`Button "${children}" was clicked!`);
  };

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
  
}

export default CustomBtn;