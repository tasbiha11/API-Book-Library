const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}

const displaySearchResult = docs => {
    console.log(docs);
    const searchResult = document.getElementById('search-result');
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
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