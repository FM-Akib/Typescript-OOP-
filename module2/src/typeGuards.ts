{
  //type guards
 // there are two type of type guards ,one is typeof and another is in guard 
//   typeof
 type Alphanumeric = string | number;

  const add = ( param1 : Alphanumeric, param2 : Alphanumeric)=>{
      if(typeof param1 === 'number' && typeof param2 === 'number'){
          return param1 + param2;
      }
      else {
        return param1.toString() + param2.toString();
      }
  }
  const result = add (4,5);
  console.log(result);

  //in guard
  type normalUser = {
    name : string;
  }
  type AdminUser = {
    name : string;
    role : string;
  }
  const getUser = (user : AdminUser | normalUser)=>{
    if('role' in user){
        return `I am an admin and my role is ${user.role}`;
    }
    else{
        return `I am a normal user`;
    }
  }
  const admiral : AdminUser = {
    name : 'harry',
    role : 'admin'
  }
   const res = getUser(admiral);
   console.log(res);
}