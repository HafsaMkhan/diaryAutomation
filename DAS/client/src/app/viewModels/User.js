const User = ({
    name: {
      type: String
    },
    registrationNo: {
      type: String
    },
    fatherName: {
      type: String
    },
    contactNo: {
      type: String
    },
    emergencyNo:{
      type:String
    },
    address: {
      type: String
    },
    CNIC: {
        type: String
    },
    DOB: {
      type: Date
  },
    IsActive: {
        type: Boolean,
        default:false
    },
    IsApproved: {
        type: Boolean,
        default:false
    },  
  });