import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    /* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com/",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    // Add a request interceptor to attach a
    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }
  async getUser(username){
    try {
      const result = await this.axiosInstance.get(`/users/${username}`)
      // console.log(result)
      return result; 
      
    } catch (err) {
      helpMeInstructor(err);
    }
  }

  async editUser(credentials){
    // console.log(credentials.username)
    try {
      const result = await this.axiosInstance.patch(`/users/${credentials.username}`, {"displayName":credentials.displayName, "about":credentials.about})
      console.log(result);
      return result; 
      
    } catch (err) {
      helpMeInstructor(err);
    }
  }

  async putPicture(file, username){
    try {
      const result = await this.axiosInstance.put(`/users/${username}/picture`, file)
      console.log(result);
      return result; 
      
    } catch (err) {
      helpMeInstructor(err);
    }
  }

  async login({ username, password }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
   
      // Instructor is logging you out because this failed
      helpMeInstructor(err);
      return err;
    }
  }

  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async register ({username, displayName, password}){
    try{
      const result = await this.axiosInstance.post("/users",{
          username,
          displayName,
          password,
      });
        return result
    }catch(err){
      helpMeInstructor(err);
      return err;
      }
    }

  async otherUsers(){
    try{
      const result = await this.axiosInstance.get("/users");
      // console.log(result)
      return result
    } catch (err) {
        helpMeInstructor(err);
      return err;
    }
  }  
  async postMessageAPI ({text}){
    try{
      const result = await this.axiosInstance.post("/messages",{
         text
      });
        return result
    }catch(err){
      helpMeInstructor(err);
      return err;
      }
    }

    async likeMessageAPI ({messageId}){
      console.log(messageId)
      try{
        const result = await this.axiosInstance.post("/likes",{
          messageId
        });
        
          return result
      }catch(err){
        helpMeInstructor(err);
        return err;
        }
      }

      async newsFeed(){
        try {
          const results = await this.axiosInstance.get("/messages");
          // console.log("api.js line 64 resutls: ", results.messages)
         return  results.messages
    
         } catch (err){
            helpMeInstructor(err);
            return err
          }
      }
      async useGoogleLogin(){
        try {
          const result = await  this.axiosInstance.get("/auth/google/login")
          // console.log(results)
          return result
        } catch (err){
          helpMeInstructor(err)
          return err
        }
        }
      }
  


// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor(err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs 👉🏿 https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
    TODO: troll students
  `,
    err
  );
}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
