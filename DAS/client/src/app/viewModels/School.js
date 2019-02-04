const School = ({
    schoolId:{
      type:String
    },
    name: {
      type: String
    },
    email:{
      type:String
    },
    address: {
      type: String
    },
    city:{
      type:String
    },
    contactNo: {
      type: String
    },
    slogan: {
      type: String
    },
    logo:{
       type:String
    },
    IsActive: {
        type: Boolean,
        default:false
    },
    IsApproved: {
        type: Boolean,
        default:false
    },
    registration_code:{
        type:String
    }
  
  
  });