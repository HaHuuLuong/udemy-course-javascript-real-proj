class Weather {
    constructor(city, state) {
      this.apiKey = '1c1ace7e9ae554c9b82cee73479b0d8b';
      this.city = city;
      this.state = state;
    }
  
    // Fetch weather from API
    async getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);
  
      const responseData = await response.json();
  
      return responseData.current_observation;
    }
  
    // Change weather location
    changeLocation(city, state) {
      this.city = city;
      this.state = state;
    }
  }