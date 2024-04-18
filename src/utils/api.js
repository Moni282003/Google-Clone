import axios from "axios";

const BASE_URL="https://www.googleapis.com/customsearch/v1"
const params={
    key:'AIzaSyAswz7P03QdiS2ZdTayBaf979WCfzZF_-g',
    cx:'226e41624e34848b0'
}

export const fetchDataFromApi = async (payload) => {
const {data}=await axios.get(BASE_URL,{
    params:{...params,...payload}
})
return data;
};
