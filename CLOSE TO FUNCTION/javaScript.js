const outerFunction=(a)=>{
    let b =20;

    const innerFunction=()=>{
        
        const multiplyAB=a*b;
        // Used For Print the Computation of Second Functions 
        console.log(`The Multiply of Two Numbers are ${multiplyAB}`);

        
    }

    // Here Inner Function is Called
    innerFunction();
}

//Here Outer Function is Called
outerFunction(10);