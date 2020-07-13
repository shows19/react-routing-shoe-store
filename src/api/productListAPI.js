import apiBase from './apiBase'

export const productListAPI = async () => {

    let result='';
    const limit = 15; //15 required else api will not work
    const uuidForURL = 'e54825db-c868-444d-a810-325a6165155d'; // required for API
    //const pageNumber = 1;
    //const url = `e54825db-c868-444d-a810-325a6165155d/activity?state=480&currency=USD&limit=${limit}&page=${pageNumber}&sort=createdAt&order=DESC&country=PK`;
    const url = `${uuidForURL}/related?currency=USD&limit=${limit}&country=PK`;

    // apibase using axios
    await apiBase.get(url)
    .then( res => {
        //console.log("Result: ",res);
        //result = res.data.ProductActivity;
        result = res.data.Products;
    })
    .catch(res => {
        //result = res;
        console.log("Result: ",res);
    });

    return result;
}
