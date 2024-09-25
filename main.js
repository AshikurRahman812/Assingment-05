
// card-1

const donationBtn = document.getElementById('donation-btn').addEventListener('click',function(){
const carentBlance =parseFloat(document.getElementById('upp-btn').innerText);

const inputAddMoney=getInputFildValuBy('input-add-money')
        if (isNaN(inputAddMoney ) || inputAddMoney < 0) {
            alert('rong')
            
            return
        }
        else{
            const addMOney=getTextFildByid('add-money')
            const blance = inputAddMoney + addMOney;
            document.getElementById('add-money').innerText=blance
            const totalBlance= carentBlance - inputAddMoney
            
            document.getElementById('upp-btn').innerText = totalBlance;

            const myModal=document.getElementById('my_modal_1');
                myModal.showModal();
        }
       
       
   
    
})

// card-2

const donitionBtn = document.getElementById('donation-btn-2').addEventListener('click',function(){
const carentBlance =parseFloat(document.getElementById('upp-btn').innerText);

    const inputAddMoney=getInputFildValuBy('input-add-money-2')
        if (isNaN(inputAddMoney ) || inputAddMoney < 0) {
            alert('rong')
            
            return
        }
    const addMOney=getTextFildByid('add-money-2')
    const blance = inputAddMoney + addMOney;
    document.getElementById('add-money-2').innerText=blance
    const totalBlance= carentBlance - inputAddMoney
    
    document.getElementById('upp-btn').innerText = totalBlance;
    
    
})

// card-3

const donation_Btn = document.getElementById('donation-btn-3').addEventListener('click',function(){
const carentBlance =parseFloat(document.getElementById('upp-btn').innerText);

    const inputAddMoney=getInputFildValuBy('input-add-money-3')
            if (isNaN(inputAddMoney ) || inputAddMoney < 0) {
                alert('rong')
                
                return
            }
    const addMOney=getTextFildByid('add-money-3')
    const blance = inputAddMoney + addMOney;
    document.getElementById('add-money-3').innerText=blance
    const totalBlance= carentBlance - inputAddMoney;
    
    document.getElementById('upp-btn').innerText = totalBlance;
    
    
})

// const donationBtn = document.getElementById('donation-btn').addEventListener('click',function(){
//     const inputAddMoney = getInputFildValuBy('input-add-money')
//     const addMOney=getTextFildByid('add-money')
//     const blance = inputAddMoney + addMOney;
//     // upp button drcrement part
//     const newBlance =getTextFildByid('upp-btn')
//     const totalBlance = newBlance - totalBlance;
    
    
    
//     document.getTextFildByid('add-money').innerText=blance;
//     document.getTextFildByid('upp-btn').innerText=totalBlance;

    
// })
// // card 2 

// const cardcontainer = document.getElementById('donation-btn-2').addEventListener('click',function(){
//     const inputContainer = document.getElementById('input-add-money-2').value;
//     const inpotNamber = parseFloat(inputContainer);
//     const addMoney_2 =document.getElementById('add-money-2').innerText;
//     console.log(addMoney_2)
//     const addaNUM =parseFloat(addMoney_2);
//     const mullBlance = inpotNamber + addaNUM

//     // upp btn part
//     const upper =document.getElementById('upp-btn').innerText;
//     const uparNum =parseFloat(upper)
//     const intotal = uparNum-inpotNamber

//     document.getElementById('add-money-2').innerText=mullBlance
//     document.getElementById('upp-btn').innerText=intotal
// })
// // card 3 

// const card_container = document.getElementById('donation-btn-3').addEventListener('click',function(){
//     const input_Container = document.getElementById('input-add-money-3').value;
//     const inpot_Namber = parseFloat(input_Container);
//     const addMoney_3 =document.getElementById('add-money-3').innerText;
//     const adda_NUM =parseFloat(addMoney_3);
//     const mull_Blance = inpot_Namber + adda_NUM

//     // upp btn part
//     const uppar =document.getElementById('upp-btn').innerText;
//     const upar_Num =parseFloat(uppar)
//     const in_total = upar_Num - inpot_Namber

//     document.getElementById('add-money-3').innerText=mull_Blance
//     document.getElementById('upp-btn').innerText=in_total
// })