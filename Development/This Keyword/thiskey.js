// console.log(this);

// const calcAge=function(birthYear)
// {
//     console.log(2037-birthYear);
//     console.log(this);
// };

// calcAge(1991);

const Jonas={
    firstName: 'Rabindra',
    year:2000,
    calcAge1: function(){
        console.log(2037-this.year)
        const self=this;
        const isMillenial=function(){

            console.log(2037-this.year);
            const self =this;
            console.log(self);
            console.log(this.self>=1981 && this.year<= 1996);
            // console.log(this.year>=1981 && this.year<=1996);
        }
        isMillenial();
    },
    greet: () =>{
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
Jonas.greet();
Jonas.calcAge1();