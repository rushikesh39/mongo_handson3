const Employee = require("../models/userModel");

async function addnewUser(req, res) {
  try {
    const result = await Employee.create([
      {
        firstName: "John",
        lastName: "Doe",
        salary: "25000",
        department: "HR",
        lastCompany: "X",
        lastSalary: "10000",
        overallExp: "2",
        contactInfo: "1234567890",
        yearGrad: "2016",
        gradStream: "CSE",
      },
      {
        firstName: "Rohan",
        lastName: "Jame",
        salary: "30000",
        department: "Technical",
        lastCompany: "Y",
        lastSalary: "15000",
        overallExp: "1",
        contactInfo: "1234567860",
        yearGrad: "2015",
        gradStream: "CSE",
      },
      {
        firstName: "Jame",
        lastName: "Doe",
        salary: "35000",
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: "20000",
        overallExp: "1",
        contactInfo: "123567890",
        yearGrad: "2019",
        gradStream: "ECE",
      },
      {
        firstName: "Sao",
        lastName: "Avika",
        salary: "30000",
        department: "Sales",
        lastCompany: "Y",
        lastSalary: "15000",
        overallExp: "2",
        contactInfo: "1234567860",
        yearGrad: "2015",
        gradStream: "CSE",
      },
      {
        firstName: "Jame",
        lastName: "roh",
        salary: "35000",
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: "15000",
        overallExp: "2",
        contactInfo: "123567890",
        yearGrad: "2019",
        gradStream: "EEE",
      },
      {
        firstName: "Rohan",
        lastName: "Jame",
        salary: "30000",
        department: "Technical",
        lastCompany: "Y",
        lastSalary: "15000",
        overallExp: "1",
        contactInfo: "1234567860",
        yearGrad: "2015",
        gradStream: "CSE",
      },
      {
        firstName: "Jame",
        lastName: "Doe",
        salary: "35000",
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: "20000",
        overallExp: "1",
        contactInfo: "123567890",
        yearGrad: "2019",
        gradStream: "ECE",
      },
      {
        firstName: "Sao",
        lastName: "Avika",
        salary: "30000",
        department: "Sales",
        lastCompany: "Y",
        lastSalary: "15000",
        overallExp: "2",
        contactInfo: "1234567860",
        yearGrad: "2015",
        gradStream: "CSE",
      },
      {
        firstName: "Jame",
        lastName: "Doe",
        salary: "35000",
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: "15000",
        overallExp: "2",
        contactInfo: "123567890",
        yearGrad: "2019",
        gradStream: "EEE",
      },
      {
        firstName: "Rohan",
        lastName: "Jame",
        salary: "30000",
        department: "Technical",
        lastCompany: "Y",
        lastSalary: "15000",
        overallExp: "1",
        contactInfo: "1234567860",
        yearGrad: "2015",
        gradStream: "CSE",
      },
      {
        firstName: "Jame",
        lastName: "Doe",
        salary: "35000",
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: "20000",
        overallExp: "1",
        contactInfo: "123567890",
        yearGrad: "2019",
        gradStream: "ECE",
      },
      {
        firstName: "Sao",
        lastName: "Avika",
        salary: "30000",
        department: "Sales",
        lastCompany: "Y",
        lastSalary: "15000",
        overallExp: "2",
        contactInfo: "1234567860",
        yearGrad: "2015",
        gradStream: "CSE",
      },
      {
        firstName: "Jame",
        lastName: "Doe",
        salary: "35000",
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: "15000",
        overallExp: "2",
        contactInfo: "123567890",
        yearGrad: "2019",
        gradStream: "EEE",
      },
    ]);
    res.status(200).send({ user: result,msg:"inserted" });
  } catch (e) {
    res.send("error");
  }
}
async function findUserwithsalarygreaterthan30000(req, res) {
  try {
    const result = await Employee.find({ salary: { $gt: "30000" } });
    console.log(result);
    res.send({ user: result });
  } catch (e) {
    res.send("error");
  }
}
async function findUserwithEXPgreaterthan2(req, res) {
  try {
    const result = await Employee.find({overallExp:{$gt:'2'}});
    console.log(result);
    res.send({ user: result });
  } catch (e) {
    res.send("error");
  }
}

async function findUserwith_yearGrad_after2015_and_exp_greaterthan1(req, res) {
  try {
    const result = await Employee.find({ "yearGrad": { $gt: 2015 }, "overallExp": { $gt: 1 } });
    console.log(result);
    res.send({ user: result });
  } catch (e) {
    res.send("error");
  }
}

async function update(req, res) {
  try {
    const result = await Employee.updateMany({ "salary": { $gte: "70000" } },{ $set: { "salary": "65000" } });
    console.log(result);
    res.send({ user: result });
  } catch (e) {
    res.send("error");
  }
}
async function deleteUser(req, res) {
  try {
    // const result=await collection.findOne({name:"node",class:'mongodb'})
    const result = await Employee.deleteOne({ name: "node" });
    console.log(result);
    res.send({ user: result });
  } catch (e) {
    res.send("error");
  }
}

async function findUsersalary(req, res) {
    try {
        const result = await Employee.find([{ salary: { $gt: "15000" }},{salary:{$ls:"30000"}} ]);
      console.log(result);
      res.send({ user: result });
    } catch (e) {
      res.send("error");
    }
  }

module.exports = { addnewUser, findUserwithsalarygreaterthan30000,findUserwithEXPgreaterthan2,findUserwith_yearGrad_after2015_and_exp_greaterthan1, update, deleteUser,findUsersalary };
