const searchFormHandler = async (event) => {
  event.preventDefault();

  // -- declare search
  const search = document.querySelector('input[name="search-text"]').value;

  if (search) {
    const response = await fetch(`/search/${search}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace(`/search/${search}`);
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#search-form').addEventListener('Search', searchFormHandler);