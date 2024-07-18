class onept{
    constructor(){
        this.api = "https://csclub.uwaterloo.ca/~phthakka/1pt"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json"}
    }
    async add_url(url,custom){
        let req=await fetch(`${this.api}/addURL.php?url=${url}&cu=${custom}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {onept};