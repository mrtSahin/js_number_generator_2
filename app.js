

let sayı

const input=document.querySelector('input')
const button=document.querySelector('button')
input.addEventListener('blur',e=>{
    sayı=e.target.value
    return sayı
})

let span=document.getElementsByClassName('uyarih')
span[0].style.display='none'





let center = document.createElement('center')

let div=document.createElement('div') // sayıları bastığımız h ları bu div içerisinde tutuyoruz

button.addEventListener('click',()=>{

    if(!Number(sayı) && !document.body.hasAttributes('h1')&& sayı!=0){
        console.log(typeof sayı)
        span[0].style.display='inline'
    }else{
        span[0].style.display='none'
        
    }


    //console.log(sayı)
    div.innerHTML='' // sayıları oluşturup ekrana basmak için her butona bastığımızda div in içerisini temizliyoruz. çünkü bir 
    // önceki oluşturduğumuz sayıları ekrandan silmemiz gerekli. yoksa aynı sayıları ekrana çok kez basmış oluruz
        
    
    let primeNumbers=findPrimes(sayı)  // asal sayıları ekleyeceğimiz dizimiz
    
    let myhBox 
    for(let i=0;i<=sayı-1;i++){
        myhBox=document.createElement('h1') // her bir sayı için yeni bir h1 etiketli öğe oluşturuyoruz  
        //let hBox  kısmını döngü içerisinde oluşturmamamızın sebebi içeriğini değiştirebildiğimizden dolayı. 
        //yeni her bir sayı için yeni bir değişken oluşturmuyoruz. elimizdeki değişkenin içeriğini sayıya göre değiştirip div e ekliyoruz
        // tek bir değişken üzerinden her bir sayı için yeni bir h1 etiketli öğe oluşturuyoruz
        myhBox.className='myhBox'
        myhBox.textContent=i
        if(primeNumbers.includes(i)){  // rengini belirliyoruz
            myhBox.style.background="red"
        }else if(0==i%2){
            myhBox.style.background="#15FF00" // yeşil
        }else{
            myhBox.style.background="#FBDF00" // sarı
        }

        div.appendChild(myhBox) // değişkeni(sayıyı arkaplan rengi belirlenmiş haliyle) div e ekliyoruz
    }
    center.appendChild(div)
    document.body.appendChild(center) // tüm sayılar div e eklendikten sonra div i body ye ekliyoruz
})





function findPrimes(sayı){
    let primeNumbers=[]
    for (let i = 0; i < sayı; i++) {
        let counter=true // kontolcümüz. eğer true ise asal, false ise asal değil olacak
        for(j=2; j<i; j++){ // j = 2 den başlatıp sayının kendisine kadar artırıyoruz
            if (i%j==0) { // eğer bir sayı kendisi ve 1 dan başka bir sayıya bölünüyorsa asal değildir.
                counter=false
                break
            }
        }
        if(counter && i>1){  // 1 asal sayı olmadığında bunun haricindeki sayıları almayız
            primeNumbers.push(i)
        }
    }
    return primeNumbers
}