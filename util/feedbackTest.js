const feedbackObj={
    feedbackMainData:{
        userIdFrom:'1123323',
        userIdTo:'1123323',
        message:'this is a normal feedback',
        visibility:["1123323","23313123"], // object id of users that is avaliable to
        feedbackType:'normal feedback'
    },

   /*
   this metadata will be different in each feedback type for 
   example if you are sending a normal feedback it will look like this 
   and feedbackMetadata will be array of objects
   */


   // In case of ( normal feedback ) it will look like this
    feedBackMetaData:{
        name:"competency",
        value:[{
            competencyId:'12312123123', // refers to the id of the competenc that will be send to a user
            competencyFeedBack:" this is feedback on a specific feedback",
            rate:6
        }] // this is the id of the competency that will be for a user for wich the feed back is sent to ,
    }

    ,

    /*
    In case of praise it will look like this 
    In prase it will be empty because praise have only the feedbackMainData 
    notice also that praise the sender id will be the id of one who is browsing
    now e.g, superAdmin mostafa or user yassmeen this data will be given to 
    after the user login
    */
   
    feedBackMetaData:{
        
    }
,
    // In case of  ( request feedback ) for myself
    feedBackMetaData:{

    // note that competency is optinal
        name:"competency",
        value:[{
            competencyId:'12312123123', // refers to the id of the competenc that  I want the user to send a feedback to 
        },
        {
            name:"feedbackStatus",
            value:"pending" // it is one of three , pending , declined , accepted , this is enm
        }
    
    ] // this is the id of the competency that will be for a user for wich the feed back is sent to  
    }
    
,

    
}



const feedBackMetaData = [{
    name:"competency",
    value:[{
        competencyId:'12312123123', // refers to the id of the competenc that will be send to a user
        competencyFeedBack:" this is feedback on a specific feedback",
        rate:6
    }] // this is the id of the competency that will be for a user for wich the feed back is sent to ,
}]

const metadataEntries = Object.entries(feedBackMetaData);
metadataEntries.forEach(([name, value]) => {
    console.log(name, " " , value)
})
