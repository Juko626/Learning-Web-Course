const url ="http://localhost:8080/api/logs";

const getData = async() => {
  try {
    await axios.post(url);
    const response = await axios.get(url);
    if(response.data){
      console.log(response.data);
    }
  }catch(e){
    console.log(e);
  }
};
getData();
