async function connect() {
    if(typeof window.ethereum !== "undefined"){
        window.ethereum.request({method: "eth_requestAccounts"})
        document.getElementById("connectButton").innerHTML = "Connected!"
    } else{
        document.getElementById("connectButton").innerHTML = "Please install metamask!"
    }
}

async function fund(ethAmount) {
    console.log(`Funding with`)
}