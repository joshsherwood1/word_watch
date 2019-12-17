const fetch = require('node-fetch');

class WordService {
  constructor(){
    this.baseUrl = "https://wordwatch-api.herokuapp.com/api/v1"
  }
  async top_word(){
      let response = await fetch(`${this.baseUrl}/top_word`)
      return response.json();
  }
}

module.exports = MusixMatchService
