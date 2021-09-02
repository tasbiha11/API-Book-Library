document.getElementById('error-message').style.display = 'none';
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
        .catch(error => displayError(error));
}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}

const displaySearchResult = docs => {
    const totalResult = document.getElementById('total-result');
    const totalNumber = docs.length;
    totalResult.innerText = `Total Book Found: ${totalNumber}`;

    const searchResult = document.getElementById('search-result');
    docs.forEach(doc => {
        // console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="img-sizing" alt="...">
            <div class="card-body">
            <h2 class="card-title">Book Title: ${doc.title}</h2>
            <h5>Author Name: ${doc.author_name}</h5>
            <h6>Publisher: ${doc.publisher}</h6>
            <h6>First Published: ${doc.first_publish_year}</h6>
            </div>
      </div>
        `;
        searchResult.appendChild(div);
    })
}