window.addEventListener('load',eventbinder);

function eventbinder(){
    var compute = document.getElementById('compute');
    compute.addEventListener('click',calculate);
};

function calculate(){
    allowances.basicSalary = parseInt(document.getElementById('BS').value);
    // console.log(allowances.basicSalary);
    // dry princple which means do not repeat yourself is violated here so instead we shoule do line no 20th code
    // document.getElementById("hra").innerText = allowances.hra();
    // document.getElementById("da").innerText = allowances.da();
    // document.getElementById("ta").innerText = allowances.ta();
    // document.getElementById("ma").innerText = allowances.ma();
    // document.getElementById("pf").innerText = allowances.pf();
    // document.getElementById("gs").innerText = allowances.gs();
    // document.getElementById("ns").innerText = allowances.ns();
    //now we had followed dry principle but we want to make our html elements dynamic too so jump on 28th line
    // var spans = document.getElementsByTagName('span');
    // // console.log(spans);
    // for(let idx=0 ; idx<spans.length ; idx++)
    // {
    //     spans[idx].innerText= allowances[spans[idx].id]();

    // }

    var fieldset = document.querySelector('#fieldset');
    
    for(let key in allowances)
    {
        // console.log(allowances[key]);
        
        if(typeof(allowances[key])==='function')
        {
            console.log(allowances[key]);
            var para = document.createElement('p');

            para.innerHTML = `${(allowances[key].name).toUpperCase()} is &#8377 ${allowances[key]()}`;
            fieldset.appendChild(para);
        }
        else{
            console.log("no");
        }
        
    }


}



