
const firebaseConfig = {
    apiKey: "AIzaSyBkyeiYNOfQ0roeCodAGv7mrWsXVDSq8A4",
    authDomain: "travelers-c99c8.firebaseapp.com",
    databaseURL: "https://travelers-c99c8-default-rtdb.firebaseio.com",
    projectId: "travelers-c99c8",
    storageBucket: "travelers-c99c8.appspot.com",
    messagingSenderId: "624064351971",
    appId: "1:624064351971:web:417071f4034300c04bbfd6"
  };

  const app =firebase.initializeApp(firebaseConfig);
 

  const signupformDB=firebase.database().ref("signupform");

  document.getElementById('signupform').addEventListener("submit",submitform);

  function submitform(e){
    e.preventDefault();

    var firstname = getElementVal('firstname');
    var lastname=getElementVal('lastname');
    var Email = getElementVal('email');
    var Dob = getElementVal('dob');
    var tpassword =getElementVal('Tpass');
    var Vpassword =getElementVal('Vpass');
    var mobile = getElementVal('mobile');
    savedmessages(firstname,lastname,Email,Dob,tpassword,Vpassword,mobile);
    
    document.querySelector(".alert").style.display="block";

    setTimeout(()=>{
     document.querySelector(".alert").style.display="none";
    },3000);

    document.getElementById("signupform").reset();
}

const savedmessages=(firstname,lastname,Email,Dob,tpassword,Vpassword,mobile)=>{
    var newsignupform = signupformDB.push();

    newsignupform.set({
        firstname : firstname,
        lastname : lastname,
        email : Email,
        dob : Dob,
        password :tpassword,
        number :mobile,
    });
};

  const getElementVal =(id) =>{
    return document.getElementById(id).value;
  }
 