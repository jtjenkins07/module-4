function ClickButton() {
  const handleClick = () => {
    alert('Clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ClickButton;