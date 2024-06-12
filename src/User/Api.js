import axios from "axios"

export const signUpData=async(data)=>{
    console.log("data in function",data)
    const resData=await axios.post("http://localhost:5001/signup",data)
        console.log("final answer",resData)
        
    }

export const loginData=async(data)=>{
    try{
const  loginInfo= await axios.post("http://localhost:5001/login",data)
console.log("final answer",loginInfo)

    }catch(err){
        console.log(err.message)
    }
}

// Function to fetch profile data
export const getProfileData = async (userId) => {
    try {
      const response = await axios.post("http://localhost:5001/login", { userId });
      console.log(response.data)
      return response.data; // Return the entire response data
    } catch (error) {
      throw new Error('Error fetching profile data');
    }
  };

