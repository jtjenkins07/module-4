function AnimalList() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <div>
      <h2>Animals:</h2>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalList;
