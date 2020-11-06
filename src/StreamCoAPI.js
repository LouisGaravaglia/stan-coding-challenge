import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";

class StreamCoAPI {

    static async getFilmTitles() {
  
      try {
        const res = await axios.get(BASE_URL);
        console.log("res: ", res);
        return res.data.entries
      }
  
      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }


  }

  export default StreamCoAPI;