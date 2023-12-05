const Admin = require('../models/Admin')
const AdminTrainer = require('../models/Trainer')
const AdminPayment = require('../models/payments')
const AdminFeedback = require('../models/contactform')
const AdminCustomer = require('../models/User')
const AdminOrder = require('../models/Order')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
class AdminServices {
    async adminLogin(reqData) {
        try {
            var email = reqData.email;
            var password = reqData.password;
            let success = false;
            let admin = await Admin.findOne({ email: email });
            if (!admin) {
                return { error: true, msg: 'Email ID already Registered', data: {} };
            }
            const comparePassword = await bcrypt.compare(password, admin.password);
            if (!comparePassword) {
                return { error: true, msg: 'Invalid Credentials', data: {} };
            }
            const data = {
                admin: {
                    id: admin.id,
                }
            }
            var authtoken = await jwt.sign(data, process.env.JWT_SECRET);
            if (authtoken) {
                success = true;
            }
            const adminDetails = {
                name: admin.name,
                email: admin.email,
            }
            // req.cookies.adminDetails=adminDetails;
            return { error: false, msg: 'Admin LoggedIn Successfully!', data: adminDetails };
        }
        catch (err) {
            return { error: true, msg: err.message, data: {} };
        }
    }

    async createAdmin(reqData) {
        try {
            let prevadmin = await Admin.findOne({ email: reqData.email })
            if (prevadmin) {
                return { error: true, msg: 'EmailID Already registered' }
            }
            const pass = reqData.password;
            const salt = await bcrypt.genSaltSync(10);
            const secpass = await bcrypt.hashSync(pass, salt);
            let admin = await Admin.create({
                name: reqData.name,
                email: reqData.email,
                password: secpass,
            })
            const data = {
                admin: {
                    id: admin.id,
                }
            }
            var authtoken = jwt.sign(data, process.env.JWT_SECRET);

            return { error: false, msg: 'Admin Created Successfully', data: admin }
        }
        catch (err) {
            return { error: true, msg: err.message };
        }
    }

    async getAllAdmins(reqData) {
        try {
            const admins = await Admin.find().sort({ _id: -1 });
            if (!admins) {
                return { error: true, msg: 'Internal Server Error' };
            }

            return { error: false, msg: 'Admins Fetched Successfully', data: admins };
        }
        catch (error) {
            return { error: true, msg: error.message };
        }
    }

    async getAllAdminTrainer(reqData) {
        try {
            const adminTrainers = await AdminTrainer.find().sort({ _id: -1 });
            if (!adminTrainers) {
                return { error: true, msg: 'Internal Server Error' };
            }

            return { error: false, msg: 'Admins Fetched Successfully', data: adminTrainers };
        }
        catch (error) {
            return { error: true, msg: error.message };
        }
    }

    async getAllAdminPayment(reqData) {
        try {
            const adminPayments = await AdminPayment.find().sort({ _id: -1 });
            if (!adminPayments) {
                return { error: true, msg: 'Internal Server Error' };
            }
            const adminPaymentsHome = adminPayments.slice(0,5);
            if (!adminPaymentsHome) {
                return { error: true, msg: 'Internal Server Error' };
            }
            const revenue = await AdminPayment.aggregate([
                {
                  $group: {
                    _id: null,
                    totalamount: { $sum: "$amount" }
                  }
                }
              ]);
            const totalamount = revenue[0].totalamount;
            console.log("🚀 ~ file: AdminServices.js:115 ~ AdminServices ~ getAllAdminPayment ~ totalamount:", totalamount)

            return { error: false, msg: 'Admins Fetched Successfully', data: {adminPayments, adminPaymentsHome, totalamount} };
        }
        catch (error) {
            return { error: true, msg: error.message };
        }
    }

    async getAllAdminFeedback(reqData) {
        try {
            const adminFeedbacks = await AdminFeedback.find().sort({ _id: -1 });
            if (!adminFeedbacks) {
                return { error: true, msg: 'Internal Server Error' };
            }

            return { error: false, msg: 'Admins Fetched Successfully', data: adminFeedbacks };
        }
        catch (error) {
            return { error: true, msg: error.message };
        }
    }

    async getAllAdminCustomer(reqData) {
        try {
            const adminCustomers = await AdminCustomer.find().sort({ _id: -1 });
            if (!adminCustomers) {
                return { error: true, msg: 'Internal Server Error' };
            }

            return { error: false, msg: 'Admins Fetched Successfully', data: adminCustomers };
        }
        catch (error) {
            return { error: true, msg: error.message };
        }
    }

    async getAllAdminOrder(reqData) {
        try {
            const adminOrders = await AdminOrder.find().sort({ _id: -1 });
            if (!adminOrders) {
                return { error: true, msg: 'Internal Server Error' };
            }
            
            const totalOrders = adminOrders.length;
            if (!totalOrders) {
                return { error: true, msg: 'Internal Server Error' };
            }

            const adminOrdersHOme = adminOrders.slice(0,5);
            if (!adminOrdersHOme) {
                return { error: true, msg: 'Internal Server Error' };
            }

            return { error: false, msg: 'Admins Fetched Successfully', data: {adminOrders, totalOrders, adminOrdersHOme} };
        }
        catch (error) {
            return { error: true, msg: error.message };
        }
    }

}
module.exports = new AdminServices();