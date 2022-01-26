async function getData(user) {
    try{
        let responce = await fetch(`https://api.github.com/users/${user}`);

        let data = await responce.json();

        return data;

    } catch{
        console.log("error:", error);

    }
}
export default getData;