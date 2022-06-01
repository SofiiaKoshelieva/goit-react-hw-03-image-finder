const axios = require('axios').default;
export default class ApiService {
  constructor() {
    this.key = '25847066-2357e1a89d6256fab4fbd0686';
    this.BASE_URL = 'https://pixabay.com/api/';
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 'per_page=12';
  }
  async fetchPhotos() {
    const response = await axios.get(
      `${this.BASE_URL}?key=${this.key}&q=${this.searchQuery}&page=${this.page}&${this.per_page}`
    );
    console.log(response);
    this.incrementPage();
    return response;
  }
  incrementPage() {
    this.page += 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  resetPage() {
    this.page = 1;
  }
}
