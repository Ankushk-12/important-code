var short = {
    yt : "youtube",
    ista: "instagram",
    fb: "facebook",
    nf: "netflix",
    td: "tinder"
};

for (const n in short){
    // console.log(n);
    // it wil give the key of object
    console.log(`the key value of object is ${n} andvalue of key is ${short[n]}`);
}