query findCompany{
  apple: company(id:"2"){
    name
    description
    id


  }
  google: company(id:"1"){
    name
    description
    id

  }
}
---
query findCompany{
  apple: company(id:"2"){
    name
    description
    id
    users{
      age
    }


  }
  google: company(id:"1"){
    name
    description
    id

  }
}

----
query findCompany{
  apple: company(id:"2"){
    ...companyDetails


  }
  google: company(id:"1"){
    ...companyDetails

  }
}

fragment companyDetails on Company{
  name
  id
  description
}

----
{
  user(id:"40"){
    id
    firstName
    age
  }
}

---
mutation{
  addUser(firstName:"Stephen", age:26){
    id
    firstName
    age
  }
}
-----

mutation{
  deleteUser(id: "S1TKHzuwl"){
    id
  }
}

-----
mutation{
  editUser(id: "41", firstName: "Abla", age: 27){
    id
    age
    firstName
    company {
      users{
        firstName
      }
    }
  }
}

-----
