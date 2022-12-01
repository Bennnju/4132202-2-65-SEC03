
    // alert("hello js!");
    var num = 10;
    let name = "ben";
    const arr = [10,20,"ben"];
    let obj = {
        name: "dang",age:20
    };
    const objmix = {
        date:[{name:"dum,gpa:3.55"},{name:"du",gpa:3.99},],
    };

    console.log(num);
    console.log(arr[2]);
    console.log(objmix.date[1].age);

    function add(a,b){
        return a + b;
    }
    let total=add(3,5);

    document.getElementById("div1").innerHTML =name;
    $(function (){
        // alert("hello jquery..")
        $("#btn1").click(function(){
            $("#div1").text("BRU");
        });
        
        $("#btn2").bind("click",()=>{
            $(".in1").val(BRU);
        });
        $("#btn3").click(()=>{
            $("#.in1:even").toggleClass("red");
        });
        $("#div_form").load("./pages/form.html");
    });
