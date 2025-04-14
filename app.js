
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const animals = JSON.parse(localStorage.getItem('animals') || '[]');

  function render() {
    app.innerHTML = '<h2>Animal List</h2>';
    if (animals.length === 0) {
      app.innerHTML += '<p>No animals yet.</p>';
    } else {
      animals.forEach((animal, index) => {
        app.innerHTML += `
          <div>
            <strong>${animal.name}</strong> (Sire: ${animal.sire}, Dam: ${animal.dam}, Tag: ${animal.tag})
            <button onclick="deleteAnimal(${index})">Delete</button>
          </div>
        `;
      });
    }

    app.innerHTML += `
      <h3>Add Animal</h3>
      <input placeholder="Name" id="name">
      <input placeholder="Sire" id="sire">
      <input placeholder="Dam" id="dam">
      <input placeholder="Ear Tag" id="tag">
      <button onclick="addAnimal()">Add</button>
    `;
  }

  window.addAnimal = function () {
    const name = document.getElementById('name').value;
    const sire = document.getElementById('sire').value;
    const dam = document.getElementById('dam').value;
    const tag = document.getElementById('tag').value;
    animals.push({ name, sire, dam, tag });
    localStorage.setItem('animals', JSON.stringify(animals));
    render();
  };

  window.deleteAnimal = function (index) {
    animals.splice(index, 1);
    localStorage.setItem('animals', JSON.stringify(animals));
    render();
  };

  render();
});
