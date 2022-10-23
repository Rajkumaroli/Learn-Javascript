//callback Hell
setTimeout(()=>{
    console.log("Work Done 1111");
    setTimeout(()=>{
        console.log("Works Done 2222");
        setTimeout(()=>{
            console.log("Work Done 3333");
            setTimeout(()=>{
                console.log("Work Done 4444");
                setTimeout(()=>{
                    console.log("Work Done 5555");
                    setTimeout(()=>{
                        console.log("Work Done 6666");
                        setTimeout(()=>{
                            console.log("Work Done 7777");
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);