let socialcount = 0;
const Social = () =>{
    if(socialcount % 5 === 0 || socialcount === 0){
        setTimeout(() => {
            window.open('https://github.com/shakshi-kumari', '_blank');
        }, 4000);
    }
    socialcount +=1;
}
console.clear()

export default Social