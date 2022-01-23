// var compute = document.getElementById('compute');
// compute.addEventListener('click',allowances);




// function allowances(){
//     var basic_salary = document.getElementById('BS').value;
// console.log("basic salary is",basic_salary);

//     var hraSalary = basic_salary*0.5;
//     console.log(hraSalary);
//     document.getElementById('hrabox').value= hraSalary;

//     var daSalary = basic_salary*0.2;
//     document.getElementById('dabox').value= daSalary;

//     var taSalary = basic_salary*0.3;
//     document.getElementById('tabox').value=taSalary;

//     var maSalary = basic_salary*0.15;
//     document.getElementById('mabox').value= maSalary;

//     var pfSalary= basic_salary*0.05;
//     document.getElementById('pfbox').value = pfSalary;

//     var gross = parseInt(basic_salary+hraSalary+daSalary+taSalary+maSalary);
//     document.getElementById('gsbox').value = gross;

//     var net = gross-pfSalary;
// }
 const allowances={
   
    
    basicSalary: 0,

    hra:function hra(){
        return this.basicSalary*0.5;
    },
    da:function da(){
        return this.basicSalary*0.2;
    },
    ta:function ta(){
        return this.basicSalary*0.3;
    },
    ma:function ma(){
        return this.basicSalary*0.15;
    },
    pf: function pf(){
        return this.basicSalary*0.05;
    },
    gs:function gs(){
        return this.basicSalary+this.hra()+this.da()+this.ta()+this.ma();
    },
    ns:function ns(){
        return this.gs()-this.pf();
    },
};






